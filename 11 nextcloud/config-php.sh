#!/bin/bash
# Script to modify Nextcloud's config.php and disable previews safely
# Logs errors in the same directory as this script.

NEXTCLOUD_CONTAINER="nextcloud"

# Log file in the same directory as the script
LOG_FILE="./nextcloud_config_error.log"

# Function to run occ commands inside the container and log errors
occ() {
  docker exec -u www-data "$NEXTCLOUD_CONTAINER" php occ "$@" 2>> "$LOG_FILE"
  if [ $? -ne 0 ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Error php occ $*" >> "$LOG_FILE"
  fi
}

#Load variables from .env specially ${DOMAIN}
export $(grep -v '^#' .env | xargs)

echo "===== Nextcloud ====="

# 1. Disable large previews
echo "1. Disabling large previews..."
occ config:system:set enable_previews --value="false"
occ config:system:set preview_max_x --value="0"
occ config:system:set preview_max_y --value="0"
occ config:system:set jpeg_quality --value="0"

# NOTE: Do NOT set enabledPreviewProviders to empty, this breaks the UI
# If needed, you can selectively disable certain preview providers, but never empty.

# 2. Set default skeleton and template directories empty
echo "2. setting default skeleton and templates empty..."
occ config:system:set skeletondirectory --value=""
occ config:system:set templatedirectory --value=""

# 3. Run maintenance and clear cache, add indices to the db.
echo "3. Running maintenance and clearing cache..."
occ maintenance:repair --include-expensive --quiet
occ db:add-missing-indices

# 4. Update time
occ config:system:set maintenance.starttime --value="02:00"
occ config:system:set maintenance.duration --value="60"

# 5. Add your domain to the trusted domains
occ config:system:set trusted_domains 1 --value="${DOMAIN}"

# 6. Restart the container.
docker restart "$NEXTCLOUD_CONTAINER"

echo "===== Finished ====="
echo "Check $LOG_FILE for any errors."

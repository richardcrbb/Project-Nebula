sudo chown -R www-data:www-data /mnt/nextcloud
sudo find /mnt/nextcloud -type d -exec chmod 750 {} \;
sudo find /mnt/nextcloud -type f -exec chmod 640 {} \;
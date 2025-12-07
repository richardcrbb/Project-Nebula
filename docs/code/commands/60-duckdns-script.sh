sudo mkdir /mnt/subvolumes/conf-files/duckdns-script

#Create a log to store possible errors:

sudo touch /mnt/subvolumes/conf-files/duckdns-script/error.log
sudo chmod 664 /mnt/subvolumes/conf-files/duckdns-script/error.log




#Create the script

sudo nano /mnt/subvolumes/conf-files/duckdns-script/update-ip.sh



#Write the following script with the correct token and keep ip= empty:

#!/bin/bash

PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

URL="https://www.duckdns.org/update?domains=###CHANGE-FOR-YOUR-DOMAIN&token=TU_TOKEN&ip="
LOG="/mnt/subvolumes/conf-files/duckdns-script/error.log"

# Run the update
RESPONSE=$(curl -sS "$URL" --max-time 10 2>&1)
EXIT_CODE=$?

# if curl fails log the error
if [[ $EXIT_CODE -ne 0 ]]; then
    echo "[$(date)] curl error: $RESPONSE" >> "$LOG"
    exit 1
fi

# if the updates fails log the error
if [[ "$RESPONSE" != "OK" && "$RESPONSE" != "NOCHANGE" ]]; then
    echo "[$(date)] DuckDNS error: $RESPONSE" >> "$LOG"
fi

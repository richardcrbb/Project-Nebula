chmod +x /mnt/subvolumes/conf-files/duckdns-script/update-ip.sh

# Create the cronjob

sudo crontab -e

#Add the following line

*/5 * * * * /mnt/subvolumes/conf-files/duckdns-script/update-ip.sh >/dev/null 2>&1
sudo chown -R www-data:www-data /mnt/subvolumes/nextcloud
sudo find /mnt/subvolumes/nextcloud -type d -exec chmod 750 {} \;
sudo find /mnt/subvolumes/nextcloud -type f -exec chmod 640 {} \;
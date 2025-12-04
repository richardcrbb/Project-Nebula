sudo chown -R www-data:www-data /mnt/subvolumes/conf-files/Nextcloud-AIO/acme
sudo find /mnt/subvolumes/conf-files/Nextcloud-AIO/acme -type f -name "*.cer" -exec chmod 644 {} \;
sudo find /mnt/subvolumes/conf-files/Nextcloud-AIO/acme -type f -name "*.key" -exec chmod 600 {} \;
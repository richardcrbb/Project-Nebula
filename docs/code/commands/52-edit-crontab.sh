#List your crontab
crontab -l

#delete de old acme and add the following:
crontab -e

#edit your sudo crontab and add...
sudo crontab -e


# Daily at 18:35
#only one line allowed! join the two lines together.
35 18 * * * "/home/criss/.acme.sh/acme.sh" --cron --home "/mnt/subvolumes/conf-files/Nextcloud-AIO/acme"
 --reloadcmd "docker restart nextcloud-aio-nextcloud" > /dev/null 2>&1

# At boot time
#only one line allowed! join the two lines together.
@reboot "/home/criss/.acme.sh/acme.sh" --cron --home "/mnt/subvolumes/conf-files/Nextcloud-AIO/acme"
 --reloadcmd "docker restart nextcloud-aio-nextcloud" > /dev/null 2>&1


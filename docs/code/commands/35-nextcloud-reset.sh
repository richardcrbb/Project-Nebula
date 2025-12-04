#To uninstall all the containers and volumes
#Stop all container from YOUR-SERVER-IP:8080
#Stop your master container from the terminal
sudo docker stop nextcloud-aio-mastercontainer
sudo docker stop nextcloud-aio-domaincheck
sudo docker container prune -f
sudo docker volume prune --filter all=1 -f

#Check there are no volumes and containers
sudo docker ps --format {{.Names}}
sudo docker volume ls --filter "dangling=true"
sudo docker volume ls --format {{.Name}}


#Delete ACME instalation if you already did it.
sudo rm -r ~/.acme.sh
#Delete the last line of your .bashrc file ' . "/home/YOUR-USER/.acme.sh/acme.sh.env" '
sudo nano ~/.bashrc
#Delete your acme cron jobs
crontab -e
sudo crontab -e

#Delete Conf-files/Nextcloud
sudo rm -r /mnt/subvolumes/conf-files/Nextcloud-AIO
sudo nano /etc/netplan/50-cloud-init.yaml

#Set your server dns as:

nameserver 127.0.0.1

#if you have "gateway4: 192.168.0.1" replace it for:

routes:
        - to: default
          via: 192.168.0.1

# Save and run:

sudo netplan apply
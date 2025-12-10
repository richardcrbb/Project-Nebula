sudo nano /etc/systemd/resolved.conf

# Uncomment ans set the following line as:

DNSStubListener=no

# Save and run:

sudo systemctl restart systemd-resolved
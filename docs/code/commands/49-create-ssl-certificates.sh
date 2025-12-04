DuckDNS_Token="###My_TOKEN" \
~/.acme.sh/acme.sh --issue \
  --dns dns_duckdns \
  -d ###CHANGE-YOUR-DOMAIN-NAME.duckdns.org\
  --cert-home /mnt/subvolumes/conf-files/Nextcloud-AIO/acme
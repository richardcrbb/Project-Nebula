#root
label=writable / btrfs defaults,noatime,compress=zstd,ssd,subvol=/ 0 0 
#nextcloud
label=MyDataDev /mnt/subvolumes/nextcloud btrfs defaults,noatime,compress=zstd,ssd,subvol=@nextcloud 0 0
#wireguard
label=MyDataDev /mnt/subvolumes/wireguard btrfs defaults,noatime,compress=zstd,ssd,subvol=@wireguard 0 0 
#pihole
label=MyDataDev /mnt/subvolumes/pihole btrfs defaults,noatime,compress=zstd,ssd,subvol=@pihole 0 0
#supabase
label=MyDataDev /mnt/subvolumes/supabase btrfs defaults,noatime,compress=zstd,ssd,subvol=@supabase 0 0 
#snapshots
LABEL=MyDataDev /mnt/subvolumes/snapshots btrfs defaults,noatime,compress=zstd,ssd,subvol=@snapshots 0 0 
#conf-file
LABEL=MyDataDev /mnt/subvolumes/conf-files btrfs defaults,noatime,compress=zstd,ssd,subvol=@conf-files 0 0 

#nextcloud
LABEL=MyDataDev /mnt/subvolumes/nextcloud btrfs defaults,noatime,compress=zstd,ssd,subvol=@nextcloud 0 0
#wireguard
LABEL=MyDataDev /mnt/subvolumes/wireguard btrfs defaults,noatime,compress=zstd,ssd,subvol=@wireguard 0 0 
#pihole
LABEL=MyDataDev /mnt/subvolumes/pihole btrfs defaults,noatime,compress=zstd,ssd,subvol=@pihole 0 0
#supabase
LABEL=MyDataDev /mnt/subvolumes/supabase btrfs defaults,noatime,compress=zstd,ssd,subvol=@supabase 0 0 
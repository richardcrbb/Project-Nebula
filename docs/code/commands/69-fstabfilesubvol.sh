#snapshots
LABEL=MyDataDev /mnt/subvolumes/snapshots btrfs defaults,noatime,compress=zstd,ssd,subvol=@snapshots 0 0 
#conf-file
LABEL=MyDataDev /mnt/subvolumes/conf-files btrfs defaults,noatime,compress=zstd,ssd,subvol=@conf-files 0 0 

#nextcloud
LABEL=MyDataDev /mnt/subvolumes/nextcloud btrfs defaults,noatime,compress=zstd,ssd,subvol=@nextcloud 0 0
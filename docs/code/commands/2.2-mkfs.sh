sudo mkfs.vfat -F32 -n system-boot /dev/sdX1
sudo mkfs.btrfs /dev/sdX2 -L writable
sudo mkfs.btrfs /dev/sdX3 -L MyDataDev

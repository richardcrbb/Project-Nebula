//. findmnt

fetch('./code/commands/22-findmnt.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command findmnt.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-findmnt');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. fstab

fetch('./code/commands/23-fstab.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command fstab.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-fstab');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. fstabfile

fetch('./code/commands/24-fstabfile.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command fstabfile.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-fstabfile');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. remount

fetch('./code/commands/25-remount.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command remount.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-remount');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. daemon reload

fetch('./code/commands/26-daemon-reload.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command daemon-reload.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-daemon-reload');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. btrfs
fetch('./code/commands/2.1-btrfs.sh', {cache: 'no-store'})
.then(r => {
  if(!r.ok) throw new Error('command btrfs.sh not found' + r.status);
  return r.text();
})
.then(text =>{
  const target = document.querySelector('#comm-btrfs');
  target.innerHTML = text;
})
.catch(e => console.log(e));


//. mkdir-sda3
fetch('./code/commands/27-mkdir-sda3.sh', {cache: 'no-store'})
.then(r => {
  if(!r.ok) throw new Error('command mkdir-sda3.sh not found' + r.status);
  return r.text();
})
.then(text =>{
  const target = document.querySelector('#comm-mkdir-sda3');
  target.innerHTML = text;
})
.catch(e => console.log(e));


//. mount-sda3
fetch('./code/commands/28-mount-sda3.sh', {cache: 'no-store'})
.then(r => {
  if(!r.ok) throw new Error('command mount-sda3.sh not found' + r.status);
  return r.text();
})
.then(text =>{
  const target = document.querySelector('#comm-mount-sda3');
  target.innerHTML = text;
})
.catch(e => console.log(e));


//. create-subvolumes
fetch('./code/commands/29-create-subvolumes.sh', {cache: 'no-store'})
.then(r => {
  if(!r.ok) throw new Error('command create-subvolumes.sh not found' + r.status);
  return r.text();
})
.then(text =>{
  const target = document.querySelector('#comm-create-subvolumes');
  target.innerHTML = text;
})
.catch(e => console.log(e));


//. check subvolumes
fetch('./code/commands/34-checksubvolumes.sh', {cache: 'no-store'})
.then(r => {
  if(!r.ok) throw new Error('command checksubvolumes.sh not found' + r.status);
  return r.text();
})
.then(text =>{
  const target = document.querySelector('#comm-checksubvolumes');
  target.innerHTML = text;
})
.catch(e => console.log(e));


//. umount-sda3
fetch('./code/commands/33-umount-sda3.sh', {cache: 'no-store'})
.then(r => {
  if(!r.ok) throw new Error('command umount-sda3.sh not found' + r.status);
  return r.text();
})
.then(text =>{
  const target = document.querySelector('#comm-umount-sda3');
  target.innerHTML = text;
})
.catch(e => console.log(e));


//. mkdir-subvolumes
fetch('./code/commands/30-mkdir-subvol.sh', {cache: 'no-store'})
.then(r => {
  if(!r.ok) throw new Error('command mkdir-subvol.sh not found' + r.status);
  return r.text();
})
.then(text =>{
  const target = document.querySelector('#comm-mkdir-subvol');
  target.innerHTML = text;
})
.catch(e => console.log(e));


//. fstab

fetch('./code/commands/23-fstab.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command fstab.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-fstab2');
    target.innerHTML= texto;
})
.catch(e => console.error(e));



//. fstabfilesubvol
fetch('./code/commands/31-fstabfilesubvol.sh', {cache: 'no-store'})
.then(r => {
  if(!r.ok) throw new Error('command fstabfilesubvol.sh not found' + r.status);
  return r.text();
})
.then(text =>{
  const target = document.querySelector('#comm-fstabfilesubvol');
  target.innerHTML = text;
})
.catch(e => console.log(e));



//. mount-a
fetch('./code/commands/32-mount-a.sh', {cache: 'no-store'})
.then(r => {
  if(!r.ok) throw new Error('command mount-a.sh not found' + r.status);
  return r.text();
})
.then(text =>{
  const target = document.querySelector('#comm-mount-a');
  target.innerHTML = text;
})
.catch(e => console.log(e));



//. daemon reload2

fetch('./code/commands/26-daemon-reload.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command daemon-reload.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-daemon-reload2');
    target.innerHTML= texto;
})
.catch(e => console.error(e));
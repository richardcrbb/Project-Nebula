//. lsblk
fetch('/Project-Nebula/code/commands/1-lsblk.sh', {cache: "no-store"})
.then(r => {
  if(!r.ok) throw new Error('command lsblk.sh not found' + r.status);
  return r.text();
})
.then(texto => {
  const target = document.querySelectorAll('#comm-lsblk'); //devuelve una lista, tengo que pasar por cada elemento:
  target.forEach(target =>{
    target.textContent= texto;
  })
})
.catch(e => console.log(e));



//. gdisk
fetch('/Project-Nebula/code/commands/2-gdisk.sh', {cache: "no-store"})
.then(r =>{
  if(!r.ok) throw new Error('command gdisk.sh not found' + r.status);
  return r.text();
})
.then(texto => {
  const target=document.querySelector('#comm-gdisk');
  target.textContent= texto;
})
.catch(e => console.log(e));

//. xz
fetch('/Project-Nebula/code/commands/3-xz.sh', {cache: 'no-store'})
.then(r =>{
  if(!r.ok) throw new Error('command xz.sh not found' + r.status);
  return r.text();
})
.then(texto => {
  const target = document.querySelector('#comm-xz');
  target.innerHTML = texto;
})
.catch(e => console.log(e));

//. mkdir
fetch('/Project-Nebula/code/commands/4-mkdir.sh', {cache: 'no-store'})
.then(r => {
  if(!r.ok) throw new Error('command mkdir.sh not found' + r.status);
  return r.text();
})
.then(texto =>{
  const target = document.querySelector('#comm-mkdir');
  target.innerHTML= texto;
})
.catch(e => console.log(e));
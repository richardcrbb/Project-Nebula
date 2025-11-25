//. Create SSH key pair 
fetch('./code/commands/12-create-ssh-keypair.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command create-ssh-keypair.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-create-ssh');
    target.innerHTML= texto;
})
.catch(e => console.error(e));

//. Copy SSH-key
fetch('./code/commands/13-cp-sshkey.sh', {cache: 'no-store'})
.then(r => {
    if(!r.ok) throw new Error('command cp-sshkey.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-cp-sshkey');
    target.innerHTML = texto;
})
.catch(e => console.error(e));

//. Disable ssh password login
fetch('./code/commands/14-disable-password.sh', {cache: 'no-store'})
.then(r => {
    if(!r.ok) throw new Error('command disable-password.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-disable-password');
    target.innerHTML = texto;
})
.catch(e => console.error(e));

//. 50 cloud init config file
fetch('./code/commands/15-sshd-50cloudinit.sh', {cache: 'no-store'})
.then(r => {
    if(!r.ok) throw new Error('command sshd-50cloudinit.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-sshd-50cloudinit');
    target.innerHTML = texto;
})
.catch(e => console.error(e));

//. restart ssh
fetch('./code/commands/15-restart-ssh.sh', {cache: 'no-store'})
.then(r => {
    if(!r.ok) throw new Error('command restart-ssh.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-restart-ssh');
    target.innerHTML = texto;
})
.catch(e => console.error(e));

//. ssh -i
fetch('./code/commands/16-ssh-i.sh', {cache: 'no-store'})
.then(r => {
    if(!r.ok) throw new Error('command sshd-50cloudinit.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-ssh-i');
    target.innerHTML = texto;
})
.catch(e => console.error(e));

//. nano ssh config
fetch('./code/commands/17-nano-sshconfig.sh', {cache: 'no-store'})
.then(r => {
    if(!r.ok) throw new Error('command nano-sshconfig.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-nano-sshconfig');
    target.innerHTML = texto;
})
.catch(e => console.error(e));

//. ssh configfile
fetch('./code/commands/18-ssh-configfile.sh', {cache: 'no-store'})
.then(r => {
    if(!r.ok) throw new Error('command ssh-configfile.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-ssh-configfile');
    target.innerHTML = texto;
})
.catch(e => console.error(e));
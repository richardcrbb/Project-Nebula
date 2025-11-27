//. install docker

fetch('./code/commands/20-install-docker.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command create-ssh-keypair.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-install-docker');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. install docker

fetch('./code/commands/21-docker-test.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command create-ssh-keypair.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-docker-test');
    target.innerHTML= texto;
})
.catch(e => console.error(e));
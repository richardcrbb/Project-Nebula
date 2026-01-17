//. ip forwarding

fetch('./code/commands/70-ip-forwarding.sh', {cache: 'no-store'})
.then(r => {
    if(!r.ok) throw new Error('command ip-forward.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-ip-forwarding');
    target.innerHTML=texto;
})
.catch(e =>{console.log(e)});

//. sysctl

fetch('./code/commands/71-sysctl.sh', {cache: 'no-store'})
.then(r =>{
    if(!r.ok) throw new Error('command sysctl.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target=document.querySelector('#comm-sysctl');
    target.innerHTML=texto;
})
.catch(e=>{console.log(e)});

//. restart sysctl

fetch('./code/commands/72-restart-sysctl.sh',{cache:'no-store'})
.then(r=>{
    if(!r.ok) throw new Error('command restart-sysctl.sh not found.' + r.status);
    return r.text();
})
.then(texto=>{
    const target=document.querySelector('#comm-restart-sysctl');
    target.innerHTML=texto;
})
.catch(e=>{console.log(e)});

//. docker network

fetch('./code/commands/73-docker-network.sh',{cache:'no-store'})
.then(r=>{
    if(!r.ok) throw new Error('command docker-network.sh not found' + r.status);
    return r.text();
})
.then(texto=>{
    const target=document.querySelector('#comm-docker-network');
    target.innerHTML=texto;
})
.catch(e=>{console.log(e)});
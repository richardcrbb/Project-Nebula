//. temporal web server

fetch('./code/commands/44-temporal-web-server.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command temporal-web-server.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-temporal-web-server');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. download compose

fetch('./code/commands/62-download-compose.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command download-compose.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-download-compose');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. deploy stack

fetch('./code/commands/63-deploy-stack.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command deploy-stack.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-deploy-stack');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. stub listener

fetch('./code/commands/64-stub-listener.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command stub-listener.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-stub-listener');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. set dns

fetch('./code/commands/65-set-dns.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command set-dns.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-set-dns');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. hosts

fetch('./code/commands/66-hosts.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command hosts.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-hosts');
    target.innerHTML= texto;
})
.catch(e => console.error(e));
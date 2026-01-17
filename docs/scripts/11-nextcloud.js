//. curl-docker-compose-file

fetch('./code/commands/88-curl-compose.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command curl-docker-compose-file.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-curl-docker-compose-file');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. docker-compose-yaml

fetch('./code/commands/90-deploy-compose.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command docker-compose-yaml.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-docker-compose-yaml');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. transfer data

fetch('./code/commands/86-transfer-data.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command transfer-data.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-transfer-data');
    target.innerHTML= texto;
})
.catch(e => console.error(e));

//. nextcloud compose dir

fetch('./code/commands/85-nextcloud-compose-dir.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command nextcloud-compose-dir.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-nextcloud-compose-dir');
    target.innerHTML= texto;
})
.catch(e => console.error(e));

//. @nexcloud permissions

fetch('./code/commands/87-permissions.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command permissions.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-permissions');
    target.innerHTML= texto;
})
.catch(e => console.error(e));

//. Config PhP File

fetch('./code/commands/55-config-php-file.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command config-php-file.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-config-php-file');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. nano env

fetch('./code/commands/89-nano-env.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command nano-env.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-nano-env');
    target.innerHTML= texto;
})
.catch(e => console.error(e));



//. nano script

fetch('./code/commands/91-nano-script.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command nano-script.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-nano-script');
    target.innerHTML= texto;
})
.catch(e => console.error(e));



//. script x

fetch('./code/commands/92-script-x.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command script-x.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-script-x');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


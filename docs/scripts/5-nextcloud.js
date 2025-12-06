
//. Nextcloud reset

fetch('./code/commands/35-nextcloud-reset.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command nextcloud-reset.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-nextcloud-reset');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. mkdir Nextcloud

fetch('./code/commands/36-mkdir-nextcloud.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command mkdir-nextcloud.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-mkdir-nextcloud');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. curl-docker-compose-file

fetch('./code/commands/37-curl-docker-compose-file.sh', {cache: 'no-store'})
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

fetch('./code/commands/38-docker-compose-yaml.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command docker-compose-yaml.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-docker-compose-yaml');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. nextcloud-instance-master

fetch('./code/commands/39-nextcloud-instance-master.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command nextcloud-instance-master.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-nextcloud-instance-master');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. save passphrase

fetch('./code/commands/40-passphrase.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command passphrase.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-passphrase');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


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


//. install acme

fetch('./code/commands/45-install-acme.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command install-acme.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-install-acme');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. mkdir acme

fetch('./code/commands/46-mkdir-acme.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command mkdir-acme.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-mkdir-acme');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. register acme email

fetch('./code/commands/47-register-acme-email.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command register-acme-email.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-register-acme-email');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. acme credentials

fetch('./code/commands/48-acme-credentials.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command acme-credentials.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-acme-credentials');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. create ssl certificates

fetch('./code/commands/49-create-ssl-certificates.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command create-ssl-certificates.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-create-ssl-certificates');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. Edit crontab

fetch('./code/commands/52-edit-crontab.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command edit-crontab.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-edit-crontab');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. certificate permissions

fetch('./code/commands/50-certificate-permissions.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command certificate-permissions.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-certificate-permissions');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. master shell

fetch('./code/commands/51-delete-previews.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command delete-previews.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-delete-previews');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. SSL lines

fetch('./code/commands/53-SSL-lines.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command SSL-lines.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-SSL-lines');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. Config PhP

fetch('./code/commands/54-config-php.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command config-php.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-config-php');
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


//. skeleton.

fetch('./code/commands/57-skeleton.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command skeleton.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-skeleton');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. save-backup-password.

fetch('./code/commands/56-save-backup-password.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command save-backup-password.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-save-backup-password');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. backup dir.

fetch('./code/commands/58-backup-dir.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command backup-dir.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-backup-dir');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. files permissions.

fetch('./code/commands/59-files-permissions.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command files-permissions.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-files-permissions');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. duckdns script.

fetch('./code/commands/60-duckdns-script.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command duckdns-script.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-duckdns-script');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


//. duckdns-permissions-cronjob

fetch('./code/commands/61-duckdns-permissions-cronjob.sh', {cache: 'no-store'})
.then(r => {
    if (!r.ok) throw new Error('command duckdns-permissions-cronjob.sh not found' + r.status);
    return r.text();
})
.then(texto =>{
    const target = document.querySelector('#comm-duckdns-permissions-cronjob');
    target.innerHTML= texto;
})
.catch(e => console.error(e));


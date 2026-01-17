//. pihole dir

fetch('./code/commands/74-pihole-dir.sh',{cache:'no-store'})
.then(r=>{
    if(!r.ok) throw new Error('command pihole-dir.sh not found. ' + r.status);
    return r.text();
})
.then (texto=>{
    const target=document.querySelector('#comm-pihole-dir');
    target.innerHTML=texto;
})
.catch(e=>{console.log(e)});

//. Download Compose

fetch('./code/commands/75-pihole-download-compose.sh',{cache:'no-store'})
.then(r=>{
    if(!r.ok) throw new Error('command pihole-download-compose.sh not found. ' + r.status);
    return r.text();
})
.then(texto=>{
    const target=document.querySelector('#comm-pihole-download-compose');
    target.innerHTML=texto;
})
.catch(e=>{console.log(e)});

//. Adjust Pihole ENV

fetch('./code/commands/76-adjust-pihole-env.sh',{cache:'no-store'})
.then(r=>{
    if(!r.ok) throw new Error('command adjust-pihole-env.sh not found. ' + r.status);
    return r.text();
})
.then(texto=>{
    const target=document.querySelector('#comm-adjust-pihole-env');
    target.innerHTML=texto;
})
.catch(e=>{console.log(e)});

//. deploy your project

fetch('./code/commands/77-deploy-your-project.sh',{cache:'no-store'})
.then(r=>{
    if(!r.ok) throw new Error('command deploy-your-project.sh not found. ' + r.status);
    return r.text();
})
.then(texto=>{
    const target=document.querySelector('#comm-deploy-your-project');
    target.innerHTML=texto;
})
.catch(e=>{console.log(e)});
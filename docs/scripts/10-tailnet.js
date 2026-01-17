//. Create tailscale dir

fetch('./code/commands/78-tailscale-dir.sh',{cache:'no-store'})
.then(r=>{
    if(!r.ok) throw new Error('command tailscale-dir.sh not found. ' + r.status);
    return r.text();
})
.then(texto=>{
    const target=document.querySelector('#comm-tailscale-dir');
    target.innerHTML=texto;
})
.catch(e=>{console.log(e)});


//. download compose

fetch('./code/commands/79-tailscale-download-compose.sh',{cache:'no-store'})
.then(r=>{
    if(!r.ok) throw new Error('command tailscale-download-compose.sh not found. ' + r.status);
    return r.text();
})
.then(texto=>{
    const target=document.querySelector('#comm-tailscale-download-compose');
    target.innerHTML=texto;
})
.catch(e=>{console.log(e)});


//. adjust-tailscale-env

fetch('./code/commands/80-adjust-tailscale-env.sh',{cache:'no-store'})
.then(r=>{
    if(!r.ok) throw new Error('command adjust-tailscale-env.sh not found. ' + r.status);
    return r.text();
})
.then(texto=>{
    const target=document.querySelector('#comm-adjust-tailscale-env');
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


//. install-tailscale-linux-client

fetch('./code/commands/81-install-tailscale-linux-client.sh',{cache:'no-store'})
.then(r=>{
    if(!r.ok) throw new Error('command install-tailscale-linux-client.sh not found. ' + r.status);
    return r.text();
})
.then(texto=>{
    const target=document.querySelector('#comm-install-tailscale-linux-client');
    target.innerHTML=texto;
})
.catch(e=>{console.log(e)});


//. tailscale-run-client

fetch('./code/commands/82-tailscale-run-client.sh',{cache:'no-store'})
.then(r=>{
    if(!r.ok) throw new Error('command tailscale-run-client.sh not found. ' + r.status);
    return r.text();
})
.then(texto=>{
    const target=document.querySelector('#comm-tailscale-run-client');
    target.innerHTML=texto;
})
.catch(e=>{console.log(e)});


//. tailnet status

fetch('./code/commands/83-check-tailnet.sh',{cache:'no-store'})
.then(r=>{
    if(!r.ok) throw new Error('command check-tailnet.sh not found. ' + r.status);
    return r.text();
})
.then(texto=>{
    const target=document.querySelector('#comm-check-tailnet');
    target.innerHTML=texto;
})
.catch(e=>{console.log(e)});


//. tailnet down | up

fetch('./code/commands/84-tailnet-down.sh',{cache:'no-store'})
.then(r=>{
    if(!r.ok) throw new Error('command tailnet-down.sh not found. ' + r.status);
    return r.text();
})
.then(texto=>{
    const target=document.querySelector('#comm-tailnet-down');
    target.innerHTML=texto;
})
.catch(e=>{console.log(e)});


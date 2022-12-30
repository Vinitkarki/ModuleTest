const token='9507656859f9c2';


// const btn=document.getElementById('btn');

// btn.addEventListener('click',async ()=>{
//     const ip=localStorage.getItem('ip');
//     console.log(ip);
//     const url='https://ipinfo.io/'+ip+'/geo';
//     const urlData=await getData(url.toString());
//     console.log(urlData);
// });

// async function getData(url){
//     // console.log(url);
//      const response=await fetch(url);
//      const data= await response.json();
//      return data;
// }

var userIp="";


async function getIpAddress(){
    // $.getJSON("https://api64.ipify.org?format=json", function(data) {
             
    //         // Setting text of element P with id gfg
    //         localStorage.setItem('ip',(data.ip).toString());
    //         $("#ip").html(data.ip);
    //         userIp=data.ip;
    //     })
    const res=await fetch('https://api64.ipify.org?format=json');
    const ipData=await res.json();
    userIp=ipData.ip;
    localStorage.setItem('ip',(ipData.ip).toString());
    document.getElementById('ip').textContent=userIp;
    //console.log(ipData);
    //const userIp=await document.getElementById('ip').textContent;
    const url=`https://ipinfo.io/${userIp}?token=9507656859f9c2`;
    //console.log(url);
    const response= await fetch(url);
    const data=await response.json();
    localStorage.setItem('userDetails',JSON.stringify(data));
}

const btn=document.getElementById('btn');
btn.addEventListener('click',getData);

async function getData(){

    // const userIp=await document.getElementById('ip').textContent;
    // const url='https://ipinfo.io/'+userIp+'?token=9507656859f9c2';
    // const response= await fetch(url);
    // const data=await response.json();
    // console.log(data);
    // localStorage.setItem('userDetails',JSON.stringify(data));

    window.location.href='home.html';
}



document.addEventListener('DOMContentLoaded',getIpAddress);
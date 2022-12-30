
async function insertData(){

    const ip=await localStorage.getItem('ip');
    document.getElementById('ip').textContent=ip;

    const userData=await localStorage.getItem('userDetails');
    const data=await JSON.parse(userData);
    //console.log(data.loc);
    const cor= data.loc.split(',')
    // console.log(cor[0]);
    const timezone=data.timezone;
    const dateTime= new Date().toLocaleString("en-US",{timeZone:`${timezone}`});



    document.getElementById('city').textContent=data.city;
    document.getElementById('region').textContent=data.region;
    document.getElementById('org').textContent=data.org;
    document.getElementById('hostname').textContent=data.hostname;
    document.getElementById('lat').textContent=cor[0];
    document.getElementById('lon').textContent=cor[1];
    document.getElementById('timezone').textContent=timezone;
    document.getElementById('pincode').textContent=data.postal;
    document.getElementById('datetime').textContent=dateTime;
    // console.log(lat);

    document.getElementById('map').src=`https://maps.google.com/maps?q=${cor[0]},${cor[1]}&output=embed`;

    const postalurl=`https://api.postalpincode.in/pincode/${data.postal}`;
    const postalRes = await fetch(postalurl);
    const postalData = await postalRes.json();
    //console.log(postalData);
    

    const message=await postalData[0].Message;
    //console.log(message);
    document.getElementById('message').textContent=message;

    const numPostOffice=postalData[0].PostOffice.length;

    for(let i=0;i<numPostOffice;i++){

        const name = postalData[0].PostOffice[i].Name;
        const district = postalData[0].PostOffice[i].District;
        const status = postalData[0].PostOffice[i].DeliveryStatus;
        const type = postalData[0].PostOffice[i].BranchType;
        const division = postalData[0].PostOffice[i].Division;

        const newEle=document.createElement('div');
        newEle.className="postEle";

        const nameEle=document.createElement('p');
        const distEle=document.createElement('p');
        const statusEle=document.createElement('p');
        const typeEle=document.createElement('p');
        const divEle=document.createElement('p');

        nameEle.textContent = `Name: ${name}`;
        distEle.textContent = `District: ${district}`;
        statusEle.textContent = `Delivery Status: ${status}`;
        typeEle.textContent = `Branch Type: ${type}`;
        divEle.textContent = `Division: ${division}`;

        newEle.appendChild(nameEle);
        newEle.appendChild(distEle);
        newEle.appendChild(statusEle);
        newEle.appendChild(typeEle);
        newEle.appendChild(divEle);

        document.getElementById("postoffices").appendChild(newEle);
    }
    
}



document.addEventListener("DOMContentLoaded",insertData);
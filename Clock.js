const clock = () => {
    let bgColor = '#06134d';
    let date = new Date();
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    let hour = date.getHours().toString().padStart(2, '0');
    let minute = date.getMinutes().toString().padStart(2, '0');
    let second = date.getSeconds().toString().padStart(2, '0');
    console.log(`${year}/${month}/${day} ${hour}:${minute}:${second}`);
    document.getElementById('date').innerHTML = `${year}/${month}/${day}`;
    if (second%2){
        document.getElementById('time').innerHTML = `${hour}:${minute}:${second} `;
    }
    else{
        document.getElementById('time').innerHTML = `${hour}<span style="color:${bgColor}">:</span>${minute}<span style="color:${bgColor}">:</span>${second} `;
    }
}
    
clock();

setInterval(() => {
   clock();
}, 1000); 


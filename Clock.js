const loadCSS = (url) => {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    let head = document.head;
    head.appendChild(link);
}

const clock = () => {
    let bgColor = '#06134d';
    let date = new Date();
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    let hour = date.getHours().toString().padStart(2, '0');
    let minute = date.getMinutes().toString().padStart(2, '0');
    let second = date.getSeconds().toString().padStart(2, '0');
    //console.log(`${year}/${month}/${day} ${hour}:${minute}:${second}`);
    document.querySelector('#date').innerHTML = `<p>${year}/${month}/${day}</p>`;
    
    if (second%2){
        document.getElementById('time').innerHTML = `${hour}:${minute}:${second} `;
    }
    else{
        document.getElementById('time').innerHTML = `${hour}<span style="color:${bgColor}">:</span>${minute}<span style="color:${bgColor}">:</span>${second} `;
    }
}

function addURLParam(url, name, value) {
    url += (url.indexOf("?") == -1 ? "?" : "&");
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
} 

document.body.onload = () => {
    console.log('loaded')
}
document.body.onresize = () => {
    console.log(`size is ${window.innerWidth}x${window.innerHeight}`)
}
document.oncontextmenu = (e) =>{
    e.preventDefault();
}

document.onpageshow = (e) =>{
    console.log('show')
}

document.onclick = (e) => {
    if (e.shiftKey){
        console.log('with shift');
    }
    console.log(`Position clicked: (${e.pageX}, ${e.pageY})`)
}

document.ondblclick = () => {
    console.log('Don\'t double click!')
}

document.textInput = (e) => {
    console.log(e.key)
}


document.body.querySelector('#clock').onmouseenter = () => {
    console.log('On the clock')
}

document.body.querySelector('#clock').onmouseleave = () => {
    console.log('Off the clock')
}


//clock main functions
loadCSS('Clock.css');
clock();
setInterval(() => {
   clock();
   
}, 1000); 

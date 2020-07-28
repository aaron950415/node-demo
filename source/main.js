getCss.onclick = ()=>{
    const request = new XMLHttpRequest;
    request.open('GET',"css.css");
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status < 400){
            const style = document.createElement('style');
            style.innerHTML = request.response;
            document.head.appendChild(style); 
            getCss.onclick=()=>{};
        }
    }
    request.send();
}   
getJs.onclick = ()=>{
    const request = new XMLHttpRequest;
    request.open('GET',"more.js");
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status < 400){
            const script = document.createElement('script');
            script.innerHTML = request.response;
            document.body.appendChild(script);
            getJs.onclick=()=>{};
        }
    }
    request.send();
}   
getHtml.onclick = ()=>{
    const request = new XMLHttpRequest;
    request.open('GET',"other.html");
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status < 400){
            const div = document.createElement('div');
            div.innerHTML = request.response;
            document.querySelectorAll('div')[1].appendChild(div);
            getHtml.onclick=()=>{};
        }
    }
    request.send();
}   




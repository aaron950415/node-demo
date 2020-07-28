change.innerHTML = "添加了XML,新的点击事件"
let n=0;
getXml.onclick =()=>{
    const request = new XMLHttpRequest;
    request.open('GET',"new.xml");
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status < 400){
            const dom = request.responseXML;
            const div = dom.getElementsByTagName('message')[0].textContent;
            change.innerHTML =div; 
            getXml.onclick=()=>{};
        }
    }
    request.send();
}    
getJson.onclick =()=>{
    const request = new XMLHttpRequest;
    request.open('GET',"new.json");
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status < 400){
            let dom = request.response;
            dom = JSON.parse(dom)
            const div = document.createElement('div');
            div.innerHTML = dom.name +" "+ dom.age +" "+dom.gender;
            console.log(div)
            document.body.insertBefore(div,getCss)
            getJson.onclick=()=>{};
        }
    }
    request.send();
}
getPage.onclick =()=>{
    const request = new XMLHttpRequest;
    n=n+1;

    request.open('GET',`data${n}.json`);
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status < 400){
            console.log(request.readyState);
            console.log(request.status);
            let dom = request.response;
            dom=JSON.parse(dom);
            const div = document.createElement('div');
            div.innerHTML ="";
            for(let key in dom){
                div.innerHTML =div.innerHTML + key +" : "+ dom[key]+"<br>";
            }
            add.appendChild(div);
            getPage.innerHTML="下一页";
        }else if(request.status > 400){  
            console.log(request.readyState);
            console.log(request.status);
            getPage.onclick=()=>{};
            getPage.innerHTML="没有了";
        }
    }
    request.send();
}


function getQueryParams(){
    let params={}
    window.location.search.substring(1).split("&").forEach(pair=>{
        let [key,value]=pair.split("=");
        params[key]=decodeURIComponent(value);
    })
    return params;
}
document.addEventListener("DOMContentLoaded",function(){
    const element=document.getElementById("content");
    let params=getQueryParams();
    element.children[0].textContent=params.data;
    document.body.addEventListener("click",function(e){
        if(e.target.id=="play"){
            window.location.href="main.html";
        }
        else if(e.target.id=="home"){
            window.location.href="index.html";
        }
    })
})
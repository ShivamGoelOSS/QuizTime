document.addEventListener("DOMContentLoaded",function(){
    const element=document.getElementById("play");
    document.body.addEventListener("click",function(e){
        if(e.target.id=="play"){
            window.location.href="main.html";
        }
        else if(e.target.id=="home"){
            window.location.href="index.html";
        }
    })
})
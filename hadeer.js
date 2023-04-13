const header=document.querySelector("#header");
const contenedor=document.querySelector("#container");
const body=document.querySelector("#body");

window.addEventListener("scroll",function(){
    if(Container.getboundingClientRect().top<10){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
})
let btnElm = document.querySelector("button");

let modalElm = document.querySelector(".modal-parent");

let xElm = document.querySelector(".X");

let secElm = document.querySelector("section");

let bodyElm = document.querySelector("body");



btnElm.addEventListener("click",function(){

    modalElm.style.display = "block";

    secElm.style.filter = "blur(10px)";

    btnElm.blur();




})

xElm.addEventListener("click", function(){

    modalElm.style.display = "none";
    secElm.style.filter = "blur(0px)";

})


bodyElm.addEventListener("keyup", function(event){
    

    if(event.key ==="Escape"){
        modalElm.style.display = "none";
    secElm.style.filter = "blur(0px)";
    }
})
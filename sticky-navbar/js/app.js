let navElm = document.querySelector("#mainNav");

let imgElm = document.querySelector("img");
document.addEventListener("scroll", function(event){
    let sT =  document.documentElement.scrollTop;
    
    if (sT > 0){

        navElm.className = "bg-black" + " txt-white";
        imgElm.style.height = "64px";
        

    }
    if (sT === 0){
        navElm.removeAttribute("class");
        imgElm.style.height = "84px";
    }

})
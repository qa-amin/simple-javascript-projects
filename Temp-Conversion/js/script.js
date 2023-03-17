// select <span></span> with .C class
let cElm = document.querySelector(".C");

// select <span></span> with .F class
let fElm = document.querySelector(".F");

// select <input> with #converter id
let inputElm = document.querySelector("#converter");

// select Change Button with .changeButton class
let changeBtn =document.querySelector(".changeButton");


let flag = "C";
changeBtn.addEventListener("click", function(event){

    if (cElm.innerHTML === "°C"){
        cElm.innerHTML = "°F";
        fElm.innerHTML = "°C";
        inputElm.setAttribute("placeholder","°F");
        document.title = "SalzLearn| Js | °F to °C";
        flag = "F";
    }
    else{
        cElm.innerHTML = "°C";
        fElm.innerHTML = "°F";
        inputElm.setAttribute("placeholder","°C");
        document.title = "SalzLearn| Js | °C to °F";
        let flag = "C";
    }

})




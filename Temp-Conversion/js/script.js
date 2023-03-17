// select <span></span> with .C class
let cElm = document.querySelector(".C");

// select <span></span> with .F class
let fElm = document.querySelector(".F");

// select <input> with #converter id
let inputElm = document.querySelector("#converter");

// select Change Button with .changeButton class
let changeBtn = document.querySelector(".changeButton");




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
        flag = "C";
    }

})

// to show output 
let resultElm = document.querySelector(".result");



// select Convert Button with .convertButton class
let convertBtn = document.querySelector(".convertButton");

convertBtn.addEventListener("click", function(){
    // input from user
    let txt = inputElm.value;
     // conver input to a number
     let num = Number(txt)
    if ( txt === ""){
        resultElm.innerHTML = "Write Correct Value";
        resultElm.style.color = "brown";
    }
    else if (isNaN(num)){
        resultElm.innerHTML = "Wrong Value!";
        resultElm.style.color = "red";
    }
    else{
        if (flag === "C" ){
            let result = ((num * 9) / 5) + 32;
            let resultString = `${num}°C is ${result.toFixed(2)}°F`;
            resultElm.innerHTML = resultString;
            resultElm.style.color = "rgb(255, 255, 102)";
        }
        else{
            let result = (num-32) * (5 / 9) ;
            let resultString = `${num}°F is ${result.toFixed(2)}°C`;
            resultElm.innerHTML = resultString;
            resultElm.style.color = "rgb(255, 255, 102)";
        }

    }
})

// select Reset Button with .resetButton class
let resetButton = document.querySelector(".resetButton")

resetButton.addEventListener("click", function(){
    inputElm.value = "";
    resultElm.innerHTML = "";
})


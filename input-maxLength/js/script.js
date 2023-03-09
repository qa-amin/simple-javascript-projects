// select <input> tag
let inputElm = document.querySelector("input");
// select <span></span> tag
let spanElm = document.querySelector(".counter");


// 
inputElm.addEventListener("keyup", function(){

    // get max length of html input tag
    let max = inputElm.getAttribute("maxlength");

    // calculate length of input 
    spanElm.innerHTML = max - inputElm.value.length;
    
    
})
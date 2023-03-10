let txtInput = document.querySelector("#input-field");

let btnSave = document.querySelector("#btn-save");

let btnDelete = document.querySelector("#btn-delete");

// main container for add another Element to show
let listElm = document.querySelector("#listed");

// colors
let colorElm = document.querySelectorAll(".color-box");

// bg color
let colorValue = txtInput.style.backgroundColor = "rgb(255,255,255)";

// get bg color that user chosen
colorElm.forEach(function(item){
    item.addEventListener("click", function(event){

        colorValue = event.target.style.backgroundColor;
        txtInput.style.backgroundColor = `${colorValue}`;

    
    })

})

// add text-input value to container
btnSave.addEventListener("click",function(){

    if (txtInput.value != ""){
        // create <div></div> tag to append listElm
        let divElm = document.createElement("div");
        divElm.className = "card shadow-sm rounded";
        // set bg color
        divElm.style.backgroundColor = colorValue;
        
        // create <p></p> tag to append divElm
        let pElm = document.createElement("p");
        pElm.className = "card-text p-3";
        // set text-input value
        pElm.innerHTML = txtInput.value;
        
        
        // append pElm to divElm
        divElm.appendChild(pElm);

        // append divElm to listElm
        listElm.appendChild(divElm);

        // click event listiner to remove container
        divElm.addEventListener("click", function(){
            divElm.remove();
        })

        txtInput.value = "";
        txtInput.style.backgroundColor = "rgb(255,255,255)";

        
    }


    
})


btnDelete.addEventListener("click", function(){
    txtInput.value = "";
})


txtInput.addEventListener("keyup", function(event){

    if (event.key ==="Enter"){
        if (txtInput.value != ""){
            // create <div></div> tag to append listElm
            let divElm = document.createElement("div");
            divElm.className = "card shadow-sm rounded";
            // set bg color
            divElm.style.backgroundColor = colorValue;
            
            // create <p></p> tag to append divElm
            let pElm = document.createElement("p");
            pElm.className = "card-text p-3";
            // set text-input value
            pElm.innerHTML = txtInput.value;
            
            
            // append pElm to divElm
            divElm.appendChild(pElm);
    
            // append divElm to listElm
            listElm.appendChild(divElm);
    
            // click event listiner to remove container
            divElm.addEventListener("click", function(){
                divElm.remove();
            })
    
            txtInput.value = "";
            txtInput.style.backgroundColor = "rgb(255,255,255)";
    
            
        }
    }

})
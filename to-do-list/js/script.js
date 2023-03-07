let txtInput = document.querySelector("input");
let ulElm = document.querySelector("ul");

txtInput.addEventListener("keydown",function(event){
    
    
     
        
        if(event.key === "Enter"){
            
            event.preventDefault();

            if (txtInput.value != "" ){
                
    
                // creat <li></li> tag
                let liElm = document.createElement("li");
        
                // add Attribute class for liElm tag and value of class
                liElm.setAttribute("class","list-group-item d-flex justify-content-between align-items-center");
        
                // create <span></span> tag
                let spanElm = document.createElement("span");
        
                // add value to span tag, vaue comes from txtInputvalue
                spanElm.innerHTML = txtInput.value;
        
                // append spanElm to liElm
                liElm.appendChild(spanElm); 
        
                // create <i></i> tag
                let iElm = document.createElement("i");
        
                // add Attribute class for iElm tag and value of class
                iElm.setAttribute("class","fa fa-trash-o delete");
        
                // append iElm to liElm
                liElm.appendChild(iElm);
        
                // append liElm to ulElm
                ulElm.appendChild(liElm);
                
                // reset txtInput
                txtInput.value = "";
            }
    
            
    
    
         }
        
     
})
let bodyElm = document.querySelector("body");

let contextMenu = document.querySelector(".context-menu");



bodyElm.addEventListener("contextmenu", function(event){
    event.preventDefault();

    contextMenu.style.display = "none";

    
    contextMenu.style.top= "200px";
    contextMenu.style.top = `${event.pageY}px`;
    contextMenu.style.left = `${event.pageX}px`;


    contextMenu.style.display = "inline";

    


    

})


bodyElm.addEventListener("click", function(){
    contextMenu.style.display= "none";
})

bodyElm.addEventListener("keydown", function(event){

    if(event.key === "Escape"){
        contextMenu.style.display= "none";
    }
    
})
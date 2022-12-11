const bodySel= document.querySelector("body");

    
 bodySel.addEventListener("mousemove", (e)=>{
    const xP = e.offsetX ;
    const yP = e.offsetY;

    // Span loving effect
    const spanCre  = document.createElement("span");
    
    bodySel.appendChild(spanCre);

    spanCre.style.left = xP + "px" ;
    spanCre.style.top = yP + "px" ;

    const size = Math.random()*50;
   
    spanCre.style.width = size + "px";
    spanCre.style.height = size + "px";
   
    // strong loving2 effect
    const strongCre  = document.createElement("strong");

    bodySel.appendChild(strongCre);

    strongCre.style.left = xP + "px" ;
    strongCre.style.top = yP + "px" ;

    const sizeT = Math.random()*40;

    strongCre.style.width = sizeT + "px";
    strongCre.style.height = sizeT + "px";

    // audio effect
    document.getElementById('bubbleAudio').play();
  

    setTimeout(() => {
        spanCre.remove();
        strongCre.remove();
    }, 2000);
    
});


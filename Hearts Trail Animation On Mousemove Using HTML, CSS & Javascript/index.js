const bodySel= document.querySelector("body");

// var audBubble = document.getElementsByTagName("audio");
// audBubble[0].play();

// var audio = new Audio('bubble sound.mp3');
// audio.play();

document.getElementById('bubbleAudio').play();

    
 bodySel.addEventListener("mousemove", (event)=>{
    const xP = event.offsetX ;
    const yP = event.offsetY;

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


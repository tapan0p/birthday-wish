const bodyE1=document.querySelector("body");
bodyE1.addEventListener("mousemove",(event)=>{
    const xPos=event.offsetX;
    const yPos=event.offsetY;
    const spanE1=document.createElement("span");
    var n=Math.ceil(Math.random()*6)
    switch(n){
        case 1:
            addSpan("span1",spanE1,xPos,yPos);
            break;
        case 2:
            addSpan("span2",spanE1,xPos,yPos);
            break;
        case 3:
            addSpan("span3",spanE1,xPos,yPos);
            break;
        case 4:
            addSpan("span4",spanE1,xPos,yPos);
            break;
        case 5:
            spanE1.innerHTML="Jiya";
            spanE1.style.color="white";
            spanE1.style.fontSize="30px";
            addSpan("span5",spanE1,xPos,yPos);
            break;
        default:
            break;
    }
});

function addSpan(cls,spanE1,xPos,yPos){
    spanE1.classList.add(cls);
    spanE1.style.left=xPos+"px";
    spanE1.style.top=yPos+"px";
    const size=Math.random()*500;
    spanE1.style.width=size+"px";
    spanE1.style.height=size+"px";
    bodyE1.appendChild(spanE1);
    setTimeout(()=>{
        spanE1.remove();
    },3000);

}

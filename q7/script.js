const btn=document.querySelector(".btn");
let counts=document.querySelector("#count");
let count=0;
btn.addEventListener("click",function(){
    count++;
    
    counts.innerHTML=count;

})
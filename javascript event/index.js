var btn=document.querySelector("#btn");
var p=document.querySelector("#date");


btn.addEventListener("click",function(){
    var data=new Date().toLocaleDateString();
    var time=new Date().toLocaleTimeString();
     p.innerHTML="data :"+data+ " "+" time" +time;
})
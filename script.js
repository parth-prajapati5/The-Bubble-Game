let tval=60;
let score=0;
function makebubble(){
    let clutter="";

for (let index = 1; index < 161; index++) {
    let number=Math.floor(Math.random() *10);
   clutter += `<div class="bubble">${number}</div>`


}
document.querySelector(".downpa").innerHTML=clutter;


}
  function timer(){
   var timer= setInterval(function (){
        if(tval > 0){

            tval--;
            document.querySelector("#Timer").textContent=tval;
        }
        else{
            clearInterval(timer);
            document.querySelector(".downpa").innerHTML=`<h1>Game Over</h1>`;
        }
    },1000);
  }
  let hitnumber;
  function hitvalue(){
     hitnumber=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitnumber;
  }
function scorenumber(){
 score += 10;
document.querySelector("#score").textContent=score;
}
function check(number){
    if(hitnumber === number){
        scorenumber();
        makebubble();
        hitvalue();
    }
    else{
        if(score > 0){
            score -=10;
            document.querySelector("#score").textContent=score;
            alert("wrong bubble clicked!");
        }
    }
  }
        document.querySelector(".downpa").addEventListener("click",(evt)=>{
         let number =Number(evt.target.textContent);
         check(number);
        })
    
hitvalue();
  timer();
  makebubble();




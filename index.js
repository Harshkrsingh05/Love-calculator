var yourName= document.querySelectorAll("input")[0].value;
var yourPartName=document.querySelectorAll("input")[1].value;

document.querySelector(".button").addEventListener("click",()=>{
  var lovecalculator= Math.floor(Math.random()*100)+1;
  if(yourName==="krish" || yourName==="anurag" || yourName==="aman"){
    document.body.innerHTML = document.body.innerHTML.replace('Try your Luck above.', "Your love success percentage is: 100%");
  }
  else{
    document.body.innerHTML = document.body.innerHTML.replace('Try your Luck above.', "Your love success percentage is: "+lovecalculator+"%");
  }
})

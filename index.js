var yourName= document.querySelectorAll("input")[0];
var yourPartName=document.querySelectorAll("input")[1];

document.querySelector(".button").addEventListener("click",()=>{
  var lovecalculator= Math.floor(Math.random()*100)+1;
  if(yourName.value==="krish tiwari" || yourName.value==="roshan r" || yourName.value==="anurag chandra" || yourName.value==="aman maurya"){
    document.body.innerHTML = document.body.innerHTML.replace('Try your Luck above.', "Your love success percentage is: 100%");
  }
  elif(yourName.value==="Shivam" || yourName.value==="Aditya" || yourName.value==="Aman"){
    document.body.innerHTML = document.body.innerHTML.replace('Try your Luck above.', "You do not deserve love, Go study");
  }
  else{
    document.body.innerHTML = document.body.innerHTML.replace('Try your Luck above.', "Your love success percentage is: "+lovecalculator+"%");
  }
})

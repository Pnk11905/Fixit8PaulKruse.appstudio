
function mulFunction(x,y) {
  return x*y;  //function returns multipication
  }
  
  function addFunction(x,y) {
    return Number(x) + Number(y);  //function returns both numbers added together 
  }
    
multBt.onclick=function(){
  solutionLB.value = mulFunction(num1.value, num2.value)
}


addBt.onclick=function(){
  solutionLB.value = addFunction(num1.value, num2.value)
}


clearBt.onclick=function(){
  num1.value = ""
  num2.value = ""
  solutionLB.value = ""
}

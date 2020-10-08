
let accountName = ""
// correct login is: Smith and pw 123Dogs#  

btnSubmit.onclick=function(){
  accountName = inptAccount.value
  let pass = inptPassword.value
  if ((accountName == "Smith") && (pass == "123Dogs#"))
    ChangeForm(welcome)
  else { 
    lblError.hidden = false
    lblError.textContent = "That login is not recognised. Please try again."
    inptAccount.value = ""
    inptPassword.value = ""
  }
}


//4. What are the names of the Event handlers being used on each form? 
// btnSubmit.onclick(logIn),  welcome.onshow (welcome), Button1.onclick (membership)
//5.Explain why the accountName variable is declared outside of the function on the 'login' form instead of inside of the function. Does it even matter?  
//Yes it does matter, the variable is a global variable and is used for other functions later on not just the btnSubmit.onclick=function()




welcomeBtn.onclick=function(){
  ChangeForm(welcome)
};

memBtn.onclick=function(){
  ChangeForm(membership)
};

calcBtn.onclick=function(){
  ChangeForm(calculator)
};

tCtr.onclick=function(){
  ChangeForm(twoControls)
};

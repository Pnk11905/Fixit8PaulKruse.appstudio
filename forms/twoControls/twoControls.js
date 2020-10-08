
dropMen.onclick=function(s) {
  if (typeof(s) == "object"){
  return;
  }
  if (s === "Account preferences") {
  NSB.MsgBox("You are not authorized to change the account settings")
}
  if (s === "Profil Information") {
  NSB.MsgBox("You haven't added any information yet")
}
  if (s === "Log Out") {
  NSB.MsgBox("Log out successfully")
}
};



Radiobutton1.onchange=function(){
   sportsLb.value = "Your favorite sport is " + $("#Radiobutton1_" + Radiobutton1.value). val();
};

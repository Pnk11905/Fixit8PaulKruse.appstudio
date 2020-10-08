
let members = ["Mary", "Sam", "Joey", "Paul", "Mike", "Char", "Jenny", "Kennedy", "Kaden", "Kurt", "Anne"]

let userName = ''

newSubmit.onclick = function() {
  userName = newInput.value
  if (members.includes(userName) == true) {
    newLabel.value = "They are a member"
  } else {
    newLabel.value = " You are not a member yet, but your name has been added now"
    members.push(userName)
  }
}
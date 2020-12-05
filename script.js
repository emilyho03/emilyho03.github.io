var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var n = new Date();
var y = n.getFullYear();
var m = n.getMonth();
var d = n.getDate();
document.getElementById("date").innerHTML = months[m] + " " + d + " " + y;

var addButton= document.getElementbyId("save-button")
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
  alert("Save button clicked!");
}

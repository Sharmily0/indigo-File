function myButton() {
    alert ("Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ")
}
var modal = document.getElementById('form');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;  
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
   
}

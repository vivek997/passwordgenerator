  
    function pprint(){
   var a = document.getElementById('tf').value;
    
        length = a;
  pass = "";
  charset = "abcdefghijklmnopqrstuvwxyz!&@#$%ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  for (var i = 0; i < length; i++) {
    pass += charset.charAt(Math.floor(Math.random()* charset.length));
  }
  document.getElementById("para").innerHTML = pass; 
     }
    
    
    
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
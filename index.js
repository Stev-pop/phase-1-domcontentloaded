// Your code goes here
document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
  } );
  
  
  function updateDOM() {
    let paragraphText = document.getElementById("text")
    paragraphText.textContent = "This is really cool!";
  }
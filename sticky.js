// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
console.log("here");
var header = document.getElementById("mainHeader");
var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 
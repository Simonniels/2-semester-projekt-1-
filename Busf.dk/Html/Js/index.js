/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  var i = 0; 			// Start Point
  var images = [];	// Images Array
  var time = 3000;	// Time Between Switch

  // Image List
  images[0] = ".billeder/natur.jpg";
  images[1] = "./billeder/sne.jpg";
  images[2] = "./billeder/bjerg.jpg";

  // Change Image
  function changeImg(){
  	document.slide.src = images[i];

  	// Check If Index Is Under Max
  	if(i < images.length - 1){
  	  // Add 1 to Index
  	  i++;
  	} else {
  		// Reset Back To O
  		i = 0;
  	}

  	// Run function every x seconds
  	setTimeout("changeImg()", time);
  }

  // Run function when page loads
  window.onload=changeImg;

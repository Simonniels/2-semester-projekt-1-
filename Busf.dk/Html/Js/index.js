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
  images[0] = "img_nature_wide1.jpg";
  images[1] = "img_snow_wide2.jpg";
  images[2] = "img_mountains_wide3.jpg";

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

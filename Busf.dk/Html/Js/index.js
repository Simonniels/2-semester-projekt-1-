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
  images[0] = "https://www.w3schools.com/w3css/img_nature_wide.jpg";
  images[1] = "https://www.w3schools.com/w3css/img_snow_wide.jpg";
  images[2] = "https://www.w3schools.com/w3css/img_mountains_wide.jpg";

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

var planeArea = document.getElementById("planeArea");

function computeFlightAngle(initX, initY, destinationX, destinationY) {
  if (initX < destinationX) {
		// right
		var adjacent = initX - destinationX;
		
		if (initY < destinationY) {
			// down
			var opposite = initY - destinationY;
			
			var tan = adjacent/opposite;	
			return 180 - Math.atan(tan) * (180/Math.PI);
		} else {
			// up
			var opposite = destinationY - initY;
			
			var tan = adjacent/opposite;	
			return Math.atan(tan) * (180/Math.PI);
		}
	} else {
		// left
		var adjacent = destinationX - initX;
		
		if (initY < destinationY) {
			// down
			var opposite = initY - destinationY;
			
			var tan = adjacent/opposite;
			return 180 + Math.atan(tan) * (180/Math.PI);
		} else {
			// up
			var opposite = destinationY - initY;
			
			var tan = adjacent/opposite;
			return Math.atan(tan) * (180/Math.PI) * -1;
		}
	}
}

function randomNumber(maximum) {
  return Math.floor(Math.random() * maximum);
}

function generatePlane() {
	var windowHeight = $(planeArea).height();
	var windowWidth = $(planeArea).width();
		
	var initX 	= randomNumber(windowWidth);
	var initY  	= randomNumber(windowHeight);
	var destinationX 	= randomNumber(windowWidth);
	var destinationY	= randomNumber(windowHeight);
	var angle = computeFlightAngle(initX, initY, destinationX, destinationY);
		
	var plane = $("<img class='plane' src='http://picoplex.net/plane.png' alt='plane'>");
  
	plane.css({
		"left": initX + "px",
		"top": initY + "px",
		"-webkit-transform":"rotate(' + angle + 'deg)",
		"transform":"rotate(" + angle + "deg)"
	});

  plane.animate({
    "top": destinationY + "px",
		"left": destinationX + "px"
  }, 14000, "linear", function(){
    plane.remove();
  });

	$("#planeArea").append(plane);	
}

for (var i = 0; i < 5; i++) generatePlane();
window.setInterval(generatePlane, 2000);
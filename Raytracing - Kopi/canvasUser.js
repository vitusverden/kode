window.onload=function() {
    init("#cccccc");
};

var lightsourceX = 500;
var lightsourceY = 250;

var borderX1 = 0;
var borderY1 = 0;
var borderX2 = 0;
var borderY2 = 0;


var points = [];

//line intercept math by Paul Bourke http://paulbourke.net/geometry/pointlineplane/
// Determine the intersection point of two line segments
// Return FALSE if the lines don't intersect
function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {

  // Check if none of the lines are of length 0
	if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
		return false
	}

	denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))

  // Lines are parallel
	if (denominator === 0) {
		return false
	}

	let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
	let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator

  // is the intersection along the segments
	if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
		return false
	}

  // Return a object with the x and y coordinates of the intersection
	let x = x1 + ua * (x2 - x1)
	let y = y1 + ua * (y2 - y1)

	return {x, y}
}


function mouseMove(evt) {
  lightsourceX = evt.x
  lightsourceY = evt.y
}
function update() {
    for (let i = 0; i < lines.length; i++) {
        deleteLine(lines[i])
    }

    createLine("border", borderX1, borderY1, borderX2, borderY2)

    points = [lightsourceY - 4, lightsourceX,
lightsourceY - 4, lightsourceX - 1,
lightsourceY - 4, lightsourceX - 2,
lightsourceY - 4, lightsourceX - 3,
lightsourceY - 4, lightsourceX - 4,
lightsourceY - 4, lightsourceX - 5,
lightsourceY - 4, lightsourceX,
lightsourceY - 4, lightsourceX + 1,
lightsourceY - 4, lightsourceX + 2,
lightsourceY - 4, lightsourceX + 3,
lightsourceY - 4, lightsourceX + 4,
lightsourceY - 4, lightsourceX + 5,
lightsourceY - 3, lightsourceX + 5,
lightsourceY - 2, lightsourceX + 5,
lightsourceY - 1, lightsourceX + 5,
lightsourceY, lightsourceX + 5,
lightsourceY + 1, lightsourceX + 5,
lightsourceY + 2, lightsourceX + 5,
lightsourceY + 3, lightsourceX + 5,
lightsourceY - 3, lightsourceX - 5,
lightsourceY - 2, lightsourceX - 5,
lightsourceY - 1, lightsourceX - 5,
lightsourceY, lightsourceX - 5,
lightsourceY + 1, lightsourceX - 5,
lightsourceY + 2, lightsourceX - 5,
lightsourceY + 3, lightsourceX - 5,
lightsourceY + 4, lightsourceX,
lightsourceY + 4, lightsourceX - 1,
lightsourceY + 4, lightsourceX - 2,
lightsourceY + 4, lightsourceX - 3,
lightsourceY + 4, lightsourceX - 4,
lightsourceY + 4, lightsourceX - 5,
lightsourceY + 4, lightsourceX,
lightsourceY + 4, lightsourceX + 1,
lightsourceY + 4, lightsourceX + 2,
lightsourceY + 4, lightsourceX + 3,
lightsourceY + 4, lightsourceX + 4,
lightsourceY + 4, lightsourceX + 5,]


    for (let i = 0; i < points.length; i += 2) {
	  	let x = differenceBetween(lightsourceX, points[i + 1])
		  let y = differenceBetween(lightsourceY, points[i])
  		x = x * 200
      y = y * 200
      
      if(intersect(lightsourceX, lightsourceY, x, y, borderY1, borderX1, borderY2, borderX2) == false) {
        createLine(i, lightsourceX, lightsourceY, x, y)  
      } 
    }

    
}


function differenceBetween(a, b) {
	return a - b
}
window.onload=function() {
    init("#cccccc");
};

var lightsourceX = 500;
var lightsourceY = 250;
var points = [];
function update() {
    for (let i = 0; i < lines.length; i++) {
        deleteLine(lines[i])
    }

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

		createLine(i, lightsourceX, lightsourceY, x, y)
    }

    
}


function differenceBetween(a, b) {
	return a - b
}

// returns true iff the line from (a,b)->(c,d) intersects with (p,q)->(r,s)
function intersects(a,b,c,d,p,q,r,s) {
    var det, gamma, lambda;
    det = (c - a) * (s - q) - (r - p) * (d - b);
    if (det === 0) {
      return false;
    } else {
      lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
      gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
      return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
    }
  };
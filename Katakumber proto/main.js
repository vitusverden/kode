var y = [
	[1, 1, 1, 0],
	[0, 0, 1, 0],
	[1, 1, 1, 0],
	[1, 0, 0, 0]
]
function showRoom(i, g) {
	console.log(i, g)
}
var info = [
	["11", "12", "13", ""],
	["21", "22", "23", ""],
	["", "", "33", ""],
	["41", "42", "43", ""]
]

for (let i = 0; i < y.length; i++) {
	document.getElementById("table").innerHTML += "<tr id='tr" + i + "'>"
	for (let g = 0; g < y[i].length; g++) {
		const e = y[i][g];
		
		if (e == 0) {
			console.log(0)
			document.getElementById("tr" + i).innerHTML += "<th><button>0</button></th>"
		} else {
			console.log(1)
			document.getElementById("tr" + i).innerHTML += "<th><button>1</button></th>"
			console.log(document.getElementById("th" + i + g))
		}
	}
	document.getElementById("table").innerHTML += "</tr> <br>"
}



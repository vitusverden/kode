var today = new Date()
function getRollespil() {
	if (today.getDay() == 5) {
		document.getElementById("rollespil?").textContent = "Ole"
	} else if (today.getDay() == 4) {
		document.getElementById("rollespil?").textContent = "Frederikke"
	} else if (today.getDay() == 3) {
		document.getElementById("rollespil?").textContent = "Jens"
	} else if (today.getDay() == 2) {
		document.getElementById("rollespil?").textContent = "Poul"
	} else if (today.getDay() == 1) {
		document.getElementById("rollespil?").textContent = "Edit"
	} else if (today.getDay() == 6) {
		document.getElementById("rollespil?").textContent = "Albert"
	} else { 
		document.getElementById("rollespil?").textContent = "Milde"
	}
}


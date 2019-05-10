var today = new Date()
Date.prototype.getWeekNumber = function(){
    var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
  };
  
function getRealWeekNumber() {
    return today.getWeekNumber();
}

function getRollespil() {
	if (today.getDay() == 5) {
		document.getElementById("rollespil?").textContent = "Ja, det er jo fredag."
	} else if (today.getDay() == 4 && isDivisible(getRealWeekNumber(), 2)) {
		document.getElementById("rollespil?").textContent = "Ja, det er en lige torsdag."
	} else if (today.getDay() == 2) {
		document.getElementById("rollespil?").textContent = "Måske, har Emil tid?"
	} else {
		document.getElementById("rollespil?").textContent = "Nej."
	}
}

function isDivisible(number, by) {
	if (number / by == Math.floor(number / by)) {
		return true
	} else {
		return false
	}
}
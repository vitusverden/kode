

window.onload=function() {
	document.getElementById("WS").value = localStorage.getItem("WS")
	document.getElementById("BS").value = localStorage.getItem("BS")
	document.getElementById("S").value = localStorage.getItem("S")
	document.getElementById("T").value = localStorage.getItem("T")
	document.getElementById("AG").value = localStorage.getItem("AG")
	document.getElementById("INT").value = localStorage.getItem("INT")
	document.getElementById("WP").value = localStorage.getItem("WP")
	document.getElementById("FEL").value = localStorage.getItem("FEL")
	setInterval(update,333);
};
var whatroll;
var theroll;
function update() {
	
	whatroll = document.getElementById("onroll").value;
	theroll = Number(document.getElementById("cast").value);
	var i = theroll;
	var succeser = 0



	if (theroll != 0 && document.getElementById(document.getElementById("onroll").value).value < 150 && document.getElementById(document.getElementById("onroll").value).value > -50 && theroll > -50 && theroll < 150) {
		if (i > document.getElementById(document.getElementById("onroll").value).value) {
			succeser = succeser - 1	
			while (i - 10 > document.getElementById(document.getElementById("onroll").value).value) {
				i = i - 10
				succeser = succeser - 1
			}
		} else {
			succeser = succeser + 1
			while (i + 10 <= document.getElementById(document.getElementById("onroll").value).value) {
				i = i + 10
				succeser = succeser + 1	
			}
		}
		console.log(succeser)
		
	} else {
		succeser = "Ups... Dette rul og/eller " + whatroll + " skillnummer ville crashe browseren, så det får du ikke lov til."
	}
	
	document.getElementById("succes").textContent = succeser
}

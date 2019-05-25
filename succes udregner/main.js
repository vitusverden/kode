

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
	localStorage.setItem("WS", document.getElementById("WS").value)
	localStorage.setItem("BS", document.getElementById("BS").value)
	localStorage.setItem("S", document.getElementById("S").value)
	localStorage.setItem("T", document.getElementById("T").value)
	localStorage.setItem("AG", document.getElementById("AG").value)
	localStorage.setItem("INT", document.getElementById("INT").value)
	localStorage.setItem("WP", document.getElementById("WP").value)
	localStorage.setItem("FEL", document.getElementById("FEL").value)
	whatroll = document.getElementById("onroll").value;
	theroll = Number(document.getElementById("cast").value);
	var i = theroll;
	var succeser = 0



	if (theroll != 0 && document.getElementById(document.getElementById("onroll").value).value < 100 && document.getElementById(document.getElementById("onroll").value).value > 0 && theroll > 0 && theroll < 101) {
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

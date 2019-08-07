var citater = ["29-04-2019 Alfred: ... jeg er meget dybt koncentret i at skrive på et whiteboard.",
 "30-04-2019 Emil: Tænk hvis puden slår igen.",
 "30-04-2019 Alfred: Kan jeg gå igennem døre?",
 "01-05-2019 Emil: Jeg vil til darnhall.",
 "01-05-2019 Nettet: http://www.darnhall.cheshire.sch.uk/ - Darnhall folkeskole. Et meget beroligende sted",
 "01-05-2019 Rune: Vi ruller lige heroppe.",
 "10-05-2019 Emil: ... han har snakket med kinesere.",
 "07-06-2019 Alfred: Det arger mig at Hitler ikke går i arv.",
 "14-06-2019 Emil: (peger på Alfred) Dit navn er Albert Charlie...",
 "05-08-2019 Benjamin: Yay! 98",
 "06-08-2019 Benjamin: Farven var brun da jeg kiggede på den igår.",
 "06-08-2019 "
]
window.onload=function() {
for (let i = 0; i < citater.length; i++) {

	var str = citater[i];
	var res = str.replace("{ML}", "");
	if (res == str) {
		document.getElementById("citater").innerHTML += "<br>" + "<p>" + "\"" + str + "\"" + "</p>"
	} else {
		document.getElementById("citater").innerHTML += "<p>" + "\"" + res + "\"" + "</p>"
	}

}

}
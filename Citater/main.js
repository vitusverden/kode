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
 "06-08-2019 Alfred: Den der lyskore, der kun er farlig når man stikker med den",
 "07-08-2019 Rune: Hvis du vil hårdt nok, så kan du det med alle instrumenter",
 "{ML}Benjamin: Hvad med en didgeridoo?",
 "07-08-2019 Emil: I er godt klar over, at jo flere i spiser, jo hurtigere er den tom",
 "{ML}Benjamin: Whaao, er det sandt?",
 "07-08-2019 Benjamin: Den her popcorn smager lidt af gummi",
 "{ML}Alfred: Det er fordi at den er gummi agtig.",
 "{ML}Rune: Det sagde hun også igår.",
 "19-08-2019 Villads W: Det er ikke din sexdukke, Chanel",
 "29-08-2019 En eller anden rollespiller: Fuck ragil.",
 "{ML}Jakob: NEEJ, du må ik kysse min ragil!"
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
var citater = ["Alfred 29-04-2019: ... jeg er meget dybt koncentret i at skrive på et whiteboard.",
 "Emil 30-04-2019: Tænk hvis puden slår igen.",
 "Alfred 30-04-2019: Kan jeg gå igennem døre?",
 "Emil 01-05-2019: Jeg vil til darnhall.",
 "Nettet 01-05-2019: http://www.darnhall.cheshire.sch.uk/ - Darnhall folkeskole. Et meget beroligende sted",
 "Rune 01-05-2019: Vi ruller lige heroppe.",
 "Emil 10-05-2019: ... han har snakket med kinesere.",
 "Alfred 07-06-2019: Det arger mig at Hitler ikke går i arv.",
 "Emil 14-06-2019: (peger på Alfred) Dit navn er Albert Charlie...",
 "Benjamin 05-08-2019: Yay! 98",
 "XX 05-08-2019:"
]
window.onload=function() {

for (let i = 0; i < citater.length; i++) {
	document.getElementById("citater").innerHTML = document.getElementById("citater").innerHTML + "<br>" + "<p>" + "\"" + citater[i] + "\"" + "</p>"


}

}//+ "\"" + citater[i]  + "\"" + "</p>"
var citater = ["Emil 29-04-2019: Systue - ikke i salen.",
 "Emil 29-04-2019: Systuen skal måske ikke være samme sted som systue.",
 "Emil 29-04-2019: Det er ligesom med rune - sådan er det bare eller sådan er det bare.",
 "Emil 29-04-2019: Det er sådan en vrumm.",
 "Emil 29-04-2019: ... sådan nogen rigtig gode nogen når man skal slås...",
 "Alfred 29-04-2019: ... jeg er meget dybt koncentret i at skrive på et whiteboard.",
 "Emil 30-04-2019: Tænk hvis puden slår igen.",
 "Alfred 30-04-2019: Kan jeg gå igennem døre?",
 "Emil 30-04-2019: Vand - det er jo nederen.",
 "Emil 01-05-2019: Jeg vil til darnhall.",
 "Nettet 01-05-2019: http://www.darnhall.cheshire.sch.uk/ - Darnhall folkeskole. Et meget beroligende sted",
 "Rune 01-05-2019: Vi ruller lige heroppe.",
 "Emil 10-05-2019: ... han har snakket med kinesere.",
 "Alfred 07-06-2019: Det arger mig at Hitler ikke går i arv.",
 "Emil 14-06-2019: (peger på Alfred) Dit navn er Albert Charlie..."
]
window.onload=function() {

for (let i = 0; i < citater.length; i++) {
	document.getElementById("citater").innerHTML = document.getElementById("citater").innerHTML + "<br>" + "<p>" + "\"" + citater[i]  + "\"" + "</p>"

}

}
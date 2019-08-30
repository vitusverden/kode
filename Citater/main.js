var citater = 
[
 "For lang tid siden Emil: Piger er nogle girakkere.",
 "For lang tid siden Vitus: Det er ikke en kappe, det er en tabard!",
 "29-04-2019 Alfred: ... jeg er meget dybt koncentret i at skrive på et whiteboard.",
 "30-04-2019 Emil: Tænk hvis puden slår igen.",
 "30-04-2019 Alfred: Kan jeg gå igennem døre?",
 "01-05-2019 Emil: Jeg vil til darnhall.",
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
 "09-08-2019 Alfred: De er mest røvhul.",
 "12-08-2019 Alfred: Du sagde at du ville være med i dem.",
 "{ML}Benjamin: Men jeg vil ikke have en hat!",
 "12-08-2019 Adrian: Nimar er en jerk.",
 "12-08-2019 Emil: Er det dig der hedder stark?",
 "12-08-2019 Adrian: Hvis man tager alting ud af kontekst så tror man at vi er sådan nogen maniacs",
 "12-08-2019 Adrian: Joda siger: \"Hvis at du vil have min anananas, så skal du give mig 30 kroner\"",
 "12-08-2019 Alfred: Jeg siger at du er blå!",
 "{ML}Adrian: Jeg siger at du er grøn!",
 "12-08-2019 Adrian: Jeg vidste ikke at fisgur var inden for sex.",
 "12-08-2019 Alfred: Jeg kan altså ikke se ideen med det der (slår på Adrian med en pude).",
 "12-08-2019 Adrian: Nej jeg er ikke fisgur!",
 "12-08-2019 Vitus: Men vi vil have en millitærbase!",
 "13-08-2019 Alfred: Piger er så fucking udspekulerede.",
 "{ML}Alfred: Hun er ligesom Hermaine Granger!",
 "13-08-2019 Vitus: (Sidder og debugger) Invalid lef bhad bldar blard",
 "13-08-2019 Adrian: Nej det må du ikke Joda!",
 "{ML}Adrian: Du må ikke sælge mig ananas!",
 "13-08-2019 Laura: Du er så fucking provokerende",
 "{ML}Emil: Ja, det er det jeg kan.",
 "13-08-2019 Tristan: Det forstår jeg intet af.",
 "{ML}Emil: Banan 39 46 Jørgen",
 "13-08-2019 Alfred: Fuck dig, hele din famillie, alt hvad du står for og alt hvad du har opnået hele dit liv!",
 "14-08-2019 Edina (vores matlærer): Nej, 1 / 5 er ikke 1.",
 "13-08-2019 Carla (en klassekammerat): Lad være, jeg har selv stjålet den!",
 "13-08-2019 Martin (vores dansklærer): Jeg bruger ikke meget af min hjernekapacitet på at tænke over, hvad dumme mennesker gør og ikke gør.",
 "14-08-2019 Adrian: Vidste du at djorka er et synonym for min far er bedre end din far?",
 "{ML}Alfred: Ja det er rigtigt fordi Ragiiiil!",
 "15-08-2019 Madicken (en klassekammerat): Lad ham sove, ellers så dør han!",
 "15-08-2019 Vitus: Jaidouzeans (udtalet [chaidusang])",
 "15-08-2019 Elton (en klassekammerat): (lugter til en squishy) Ad den stinker... Den er giftig!",
 "16-08-2019 Benjamin: Halvejs igennem hoppet, huskede jeg at jeg kun havde 1 liv...",
 "20-08-2019 Lili-Luna: Kan i ikke lige have sex et andet sted?",
 "26-08-2019 Alfred: Man skulle forfanden tro at du står i ledtog med Dansk Folkeparti.",
 "26-08-2019 Emil: Fucking lige frem",
 "29-08-2019 Rune: Glæd dig til at jeg får flere liv end dig.",
 "{ML}Jakob: Nej, du må ikke skifte karekter, jeg eeelsker dig!"
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
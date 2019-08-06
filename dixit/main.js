var inputs = []
var pointsCards = []
var pointsNames = []
var globalPoints = []
var ownerCard = 0;



function submit() {
	name = document.getElementById("name").value
	card = Number(document.getElementById("card").value)
	guess = Number(document.getElementById("guess").value)

	inputs.push(new Array(name, card, guess))
	document.getElementById("name").value = ""
	document.getElementById("card").value = ""
	document.getElementById("guess").value = ""
}

function stsub() {
	document.getElementById("name").value = "v"
	document.getElementById("card").value = "1"
	document.getElementById("guess").value = "2"
	submit()
	document.getElementById("name").value = "b"
	document.getElementById("card").value = "2"
	document.getElementById("guess").value = "0"
	submit()
	document.getElementById("name").value = "r"
	document.getElementById("card").value = "3"
	document.getElementById("guess").value = "2"
	submit()
}

function calcnow() {
	//Start loop. For at give alle gættende 1 point.
	for (let i = 0; i < inputs.length; i++) {
		const guess = inputs[i][2];
		//Hvis p ersonen ikke er den der har lagt kortet ned:
		if (!guess == 0) {
			let havePoints = false
			//Loop for at tjekke, om det kort nummer har point
			for (let o = 0; o < pointsCards.length; o++) {
				const element = pointsCards[o][0];
				//Hvis det har point, sæt variablen til true og giv det 1 point
				//Ellers, fortsæt
				if (element == guess) {
					havePoints = true
					pointsCards[o][1] = pointsCards[o][1] + 1
				}
			}

			//Hvis kortet ikke har point, giv det 1 point
			if (havePoints == false) {
				pointsCards.push(new Array(guess, 1))
			}
		} else {
			ownerCard = inputs[i][1]
		}
	}


	//Loop gæt, for at se hvor mange folk har gættet rigtigt.
	let rightGuesses = 0;
	for (let i = 0; i < inputs.length; i++) {
		const guess = inputs[i][2];
		if (guess == ownerCard) {
			rightGuesses++
		}
	
	}
	//Hvis at (folk gættet rigtigt) - 1 = (antal inputs):
	if (rightGuesses == inputs.length - 1) {
		//Loop alle kort. Giv 2 point til kort
		for (let i = 0; i < inputs.length; i++) {
			const card = inputs[i][1];
			let havePoints = false
			//Loop for at tjekke, om ejet kort nummer har point
			for (let o = 0; o < pointsCards.length; o++) {
				const element = pointsCards[o][0];
				//Hvis det har point, sæt variablen til true og giv det 2 point
				//Ellers, fortsæt
				if (element == card) {
					havePoints = true
					pointsCards[o][1] = pointsCards[o][1] + 2
				}
			}

			//Hvis ejet kort ikke har point, giv det 2 point
			if (havePoints == false) {
				pointsCards.push(new Array(inputs[i][1], 2))
			}
			
		}
		//Fjern rightGuesses + 2 point fra det rigtige kort (pga, at de får det tidligere.)
		//Loop for at finde ownercard's points
		for (let o = 0; o < pointsCards.length; o++) {
			const element = pointsCards[o][0];
			//Hvis det er det rigtige, fjern rightGuesses point fra det.
			if (element == ownerCard) {
				pointsCards[o][1] = pointsCards[o][1] - (rightGuesses + 2)
			}
		}
	} else {
		for (let i = 0; i < inputs.length; i++) {
			const guess = inputs[i][2];
			//Hvis personen har gættet rigtigt:
			if (guess == ownerCard) {
				let havePoints = false
				//Loop for at tjekke, om ejet kort nummer har point
				for (let o = 0; o < pointsCards.length; o++) {
					const element = pointsCards[o][0];
					//Hvis det har point, sæt variablen til true og giv det 1 point
					//Ellers, fortsæt
					if (element == inputs[i][1]) {
						havePoints = true
						pointsCards[o][1] = pointsCards[o][1] + 1
					}
				}

				//Hvis ejet kort ikke har point, giv det 1 point
				if (havePoints == false) {
					pointsCards.push(new Array(inputs[i][1], 1))
				}
			}
		}
	}
	//Lav pointsCards om til navne
	for (let i = 0; i < pointsCards.length; i++) {
		const cElement = pointsCards[i];

		for (let o = 0; o < inputs.length; o++) {
			const nElement = inputs[o];

			if (cElement[0] == nElement[1]) {
				pointsNames.push(new Array(nElement[0], cElement[1]))
			}
		}
	}
	//Tilføj pointsNames til hele spillet
	for (let i = 0; i < pointsNames.length; i++) {
		const name = pointsNames[i][0]
		const roundPoints = pointsNames[i][1]
		let havePoints = false
		//Loop for at tjekke, om den spiller har point
		for (let o = 0; o < globalPoints.length; o++) {
			const element = globalPoints[o][0];
			//Hvis den har point, sæt variablen til true og giv det 1 point
			//Ellers, fortsæt
			if (element == name) {
				havePoints = true
				globalPoints[o][1] = globalPoints[o][1] + roundPoints
			}
		}
		//Hvis spilleren ikke har point, giv det 1 point
		if (havePoints == false) {
			globalPoints.push(new Array(name, roundPoints))
		}
	}

	//Slet table
	document.getElementById("pointsTH").innerHTML = ""
	document.getElementById("pointsTD").innerHTML = ""
	//Opdater tableheads
	for (let i = 0; i < globalPoints.length; i++) {
		const element = globalPoints[i][0];
		document.getElementById("pointsTH").innerHTML = document.getElementById("pointsTH").innerHTML + "<th>" + element + "</th>"
	}
	//Opdater tabledatas
	for (let i = 0; i < globalPoints.length; i++) {
		const element = globalPoints[i][1];
		document.getElementById("pointsTD").innerHTML = document.getElementById("pointsTD").innerHTML + "<td>" + element + "</td>"
	}

	//Reset runde variabler
	inputs = []
	pointsCards = []
	pointsNames = []
}

//Todo:
//-Hvis at alle gætter det, giv 2 point til alle.
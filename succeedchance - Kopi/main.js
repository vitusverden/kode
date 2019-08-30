function getChance(sides, atleast) {
	let x = 0
	for (let i = 1; i <= sides; i++) {
		if(i >= atleast) {
			x++
		}
		
	}
	let prob1 = (x / sides) * 100
	x = 0
	for (let i = 1; i <= sides; i++) {
		for (let o = 1; o <= sides; o++) {
			if(i + o >= atleast) {
				x++
			}
		}
	}
	let sidessq = sides * sides
	let prob2 = (x / sidessq) * 100
	x = 0
	for (let i = 1; i <= sides; i++) {
		for (let o = 1; o <= sides; o++) {
			for (let u = 1; u <= sides; u++) {
				if(i + o + u >= atleast) {
					x++
				}
			}
		}
	}
	let sidescu = sides * sides * sides
	let prob3 = (x / sidescu) * 100
	x = 0
	for (let i = 1; i <= sides; i++) {
		for (let o = 1; o <= sides; o++) {
			for (let u = 1; u <= sides; u++) {
				for (let y = 1; y <= sides; y++) {
					if(i + o + u + y >= atleast) {
						x++
					}
				}
			}
		}
	}
	let sidesqu = sides * sides * sides * sides
	let prob4 = (x / sidesqu) * 100
	console.log(x, prob1, prob2, prob3, prob4)

	document.getElementById("chance").innerHTML = "<p>Chancen for at klare det med 1 terning er " + prob1 + "%</p><br><p>Chancen for at klare det med 2 terninger er " + prob2 + "%</p><br><p>Chancen for at klare det med 3 terninger er " + prob3 + "%</p><br><p>Chancen for at klare det med 4 terninger er " + prob4 + "%</p>"

	/*

	loop igennem alle kombinationer
		hvis at kombinationen giver mere end





	*/





	//
	//x = 0
	//for (let i = 1; i < (sides + 1); i++) {
	//	for (let o = 1; o < (sides + 1); o++) {
	//		if((i + o) >= atleast) {
	//			x++
	//		}
	//	}
	//}
	//let prob2 = x / (sides + 1)
	//console.log(x)
	//console.log(prob1, prob2)
}
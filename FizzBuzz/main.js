function isDivisible(number, by) {
	if (number / by == Math.floor(number / by)) {
		return true;
	} else {
		return false;
	}
}

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (isDivisible(i, 3) && isDivisible(i,5)) {
            console.log("Fizzbuzz");
        } else if(isDivisible(i, 3)) {
            console.log("Fizz");
        } else if(isDivisible(i, 5)){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
var alphabet = ["å", "a", "b", "c", "D", "e", "f", "g", "u", "i", "j", "k", "<", "l", "m", "n", "o", "1", "q", "r", "s", "t", "h", "v", "w", "x", "y", "z", "A", "B", "C", "L", "E", "F", "G", "H", "I", "J", "K", "d", " ", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "M", "0", "p", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "/", "-", "*", "+", ":", ";"];
var temp = document.querySelector(".input").value
var input = temp.split("");
var numberinput = parseInt(document.querySelector(".numberinput").value);
var output = []
var temp2 = ""
function moveInArray(letter, moveBy) {
    if (alphabet.indexOf(letter) == -1) {
        return "?"
    } else {
        var temp1 = alphabet.indexOf(letter)
        var length = alphabet.length
        if (temp1 + moveBy > length) {
            return alphabet[temp1 + moveBy - length]
        } else {
            if (temp1 + moveBy < 0) {
                return alphabet[temp1 + moveBy + length]
            } else {
                return alphabet[temp1 + moveBy]
            }

        }
    }

}



function encrypt() {
    document.getElementById("output").innerHTML = "";
    temp = document.querySelector(".input").value
    input = temp.split("");
    numberinput = parseInt(document.querySelector(".numberinput").value);
    temp2 = ""
    var i = 0;
    var mov = i;
    for (i = 0; i < input.length; i++) {
        mov += i
        if (mov > alphabet.length - 5) {
            mov = 4
        }
        output[i] = alphabet.indexOf(moveInArray(input[i], numberinput + mov)) + " "
    }
    temp2 = output.toString()
    for (i = 0; i < output.length * 2; i = i + 2) {
        temp2 = temp2.toString().replace(",", "");
    }
    document.getElementById("output").innerHTML = temp2;
    alert(temp2);
}
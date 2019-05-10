var alphabet = ["å", "a", "b", "c", "D", "e", "f", "g", "u", "i", "j", "k", "<" "l", "m", "n", "o", "1", "q", "r", "s", "t", "h", "v", "w", "x", "y", "z", "A", "B", "C", "L", "E", "F", "G", "H", "I", "J", "K", "d", " ", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "M", "0", "p", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "/", "-", "*", "+", ":", ";" ];
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
    temp = document.querySelector(".input").value
    input = temp.split("");
    numberinput = parseInt(document.querySelector(".numberinput").value);
    temp2 = ""
    var i;
    for (i = 0; i < input.length; i++) { 
        output[i] = moveInArray(input[i], numberinput)
    }
    temp2 = output.toString()
    for (i = 0; i < output.length * 2; i = i + 2) { 
        temp2 = temp2.toString().replace(",", "");
    }
    document.getElementById("output").innerHTML = temp2;
}
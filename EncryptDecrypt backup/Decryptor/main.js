var alphabet = ["å", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "/", "-", "*", "+", ":", ";" ];
var temp = document.querySelector(".input").value
var input = temp.split("");
var numberinput = alphabet.length - parseInt(document.querySelector(".numberinput").value);
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
function decrypt() {
    temp = document.querySelector(".input").value;
    input = temp.split("");
    numberinput = alphabet.length - parseInt(document.querySelector(".numberinput").value);
    temp2 = ""
    var i;
    for (i = 0; i < input.length; i++) {
        output[i] = moveInArray(input[i], numberinput);
    }
    temp2 = output.toString();
    for (i = 0; i < output.length * 2; i = i + 2) {
        temp2 = temp2.toString().replace(",", "");
    }
    document.getElementById("output").innerHTML = temp2;
}

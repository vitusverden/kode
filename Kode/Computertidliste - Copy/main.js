var sidstKlikketKnap;

function klikketDiv(div) {
    
    sidstKlikketKnap = div;
    if(!sidstKlikketKnap.textContent) {
        document.getElementById("submit-box").style.display = "block";
    }
}

function tilfojNavn() {
    if(!sidstKlikketKnap.textContent) {
    let navn = document.getElementById("navnInput").value;
    
    sidstKlikketKnap.textContent = navn
    document.getElementById("navnInput").value = ""
    document.getElementById("submit-box").style.display = "none";
    }
}

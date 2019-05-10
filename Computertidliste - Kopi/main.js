var sidstKlikketKnap;
var menuopen = false;
var staffOpen1 = false;
var sletOn = false;
var indsatUdenRestrOn = false;
var staffOpen2 = false;


function klikketDiv(div) {
    if (!menuopen, !staffOpen1, !staffOpen2) {
        if (sletOn) {
            div.textContent = "";
            sletOn = false;
            document.getElementById("sletTidHeader").style.display = "none"
        } else {
            if(!div.textContent || indsatUdenRestrOn) {
                sidstKlikketKnap = div;
                document.getElementById("submit-box").style.display = "block";
                menuopen = true;
            }
        }
        
    }
    
}

function closeMenu() {
    if (menuopen) {
        document.getElementById("navnInput").value = "";
        document.getElementById("submit-box").style.display = "none";
        menuopen = false;
        sidstKlikketKnap = undefined;
    }
}

function checkIfExists(check) {
    let x = false
    for (let index = 1; index < 5; index++) {
        for (let o = 1; o < 11; o++) {
            if(document.getElementById(String(o) + "-" + String(index)).textContent == String(check)) {x = true;}

        }
    }
    return x
}

function tilfojNavn() {
    if(!sidstKlikketKnap.textContent || indsatUdenRestrOn) {
        let navn = document.getElementById("navnInput").value;
        if (!checkIfExists(navn) || indsatUdenRestrOn) {
            sidstKlikketKnap.textContent = navn;
            document.getElementById("navnInput").value = "";
            document.getElementById("submit-box").style.display = "none";
            menuopen = false;
            sidstKlikketKnap = undefined;
            document.getElementById("indsatUdenRestrHeader").style.display = "none"
            indsatUdenRestrOn = false;
        } else  {
            document.getElementById("navnInput").value = "";
            document.getElementById("submit-box").style.display = "none";
            menuopen = false;
            sidstKlikketKnap = undefined;
        }
        
    }    
}

function openStaffMenu() {
    if (!staffOpen1, !staffOpen2) {
        if (menuopen) {
            document.getElementById("navnInput").value = "";
            document.getElementById("submit-box").style.display = "none";
            menuopen = false;
            sidstKlikketKnap = undefined;
        }
        document.getElementById("staff-veri-box").style.display = "block";
        staffOpen1 = true

    }

    
}

function openStaffMenuReal(code) {
    console.log(code.value)
    let codevalue = code.value;

    code.value = "";

    if(codevalue === "VitusErSej") {
        document.getElementById("staff-box").style.display = "block";
        document.getElementById("staff-veri-box").style.display = "none";
        staffOpen1 = false;
        staffOpen2 = true;
    }
}

function sletDiv() {
    if (!staffOpen1, staffOpen2) {
        document.getElementById("sletTidHeader").style.display = "block"
        sletOn = true;
        staffOpen2 = false;
        document.getElementById("staff-box").style.display = "none";
    }
    
}

function indsatUdenRestr() {
    if (!staffOpen1, staffOpen2) {
        document.getElementById("indsatUdenRestrHeader").style.display = "block"
        indsatUdenRestrOn = true;
        staffOpen2 = false;
        document.getElementById("staff-box").style.display = "none";
    }
}


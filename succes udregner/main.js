

window.onload=function() {
    document.getElementById("WS").value = localStorage.getItem("WS")
    document.getElementById("BS").value = localStorage.getItem("BS")
    document.getElementById("S").value = localStorage.getItem("S")
    document.getElementById("T").value = localStorage.getItem("T")
    document.getElementById("AG").value = localStorage.getItem("AG")
    document.getElementById("INT").value = localStorage.getItem("INT")
    document.getElementById("WP").value = localStorage.getItem("WP")
    document.getElementById("FEL").value = localStorage.getItem("FEL")
    setInterval(update,1000/15);
};



var e;
var strUser;
var o;

function update() {
    localStorage.setItem("WS", document.getElementById("WS").value)
    localStorage.setItem("BS", document.getElementById("BS").value)
    localStorage.setItem("S", document.getElementById("S").value)
    localStorage.setItem("T", document.getElementById("T").value)
    localStorage.setItem("AG", document.getElementById("AG").value)
    localStorage.setItem("INT", document.getElementById("INT").value)
    localStorage.setItem("WP", document.getElementById("WP").value)
    localStorage.setItem("FEL", document.getElementById("FEL").value)
    e = document.getElementById("onroll");
    strUser = e.options[e.selectedIndex].value;
    o = document.getElementById("onroll");
    var i = o;
    var succeser = 0
    if (i < 0) {
        i -= 1
    } else {
        i += 1
    //    while (i + 10 == 0) {
    //        
    //    }
    }
    
}

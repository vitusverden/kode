window.onload=function() {
    init("black");
    createBox("p1", "#0000FF", 100, 300, 25, 100);
    createBox("p2", "#FF0000", 1200, 300, 25, 100);
    createBox("ball", "#00FF00", 650, 300, 30, 30);
};

var ballSpeedX = 3;
var ballSpeedY = 0;

function checkCollisonWithCanvas(input) {
    console.log("run")
    if(input == undefined) {
        return "Wierd. You didnt specify the input. ERROR 40: HUMAN ERROR. ELIMINATION OF HUMAN OBJECT WILL FIX THIS."
    } else {
        if (getYPositionOfBox(input) + 20 + 1 >= canv.height || getYPositionOfBox(input) - 1 <= 0 || getXPositionOfBox(input) - 1 <= 0 || getXPositionOfBox(input) + 1 >= canv.width) {
            console.log("run, true")
            return true
        } else {
            console.log("run, false")
            return false
            
        }
    }
    
}

function update() {
    if(ballSpeedX >= 0) {
        for (let i = 0; i < ballSpeedX; i++) {
            setXPositionOfBox("ball", getXPositionOfBox("ball") + 1)
            if(checkCollisonWithCanvas("ball")) {
                i = ballSpeedX + 1
            }
        }
    } else {
        for (let i = 0; i > ballSpeedX; i = i - 1) {
            setXPositionOfBox("ball", getXPositionOfBox("ball") + 1)
            if(checkCollisonWithCanvas("ball")) {
                i = ballSpeedX - 1
            }
        }
    }
    
    if(ballSpeedY >= 0) {
        for (let i = 0; i < ballSpeedY; i++) {
            setYPositionOfBox("ball", getYPositionOfBox("ball") + 1)
            if(checkCollisonWithCanvas("ball")) {
                i = ballSpeedX + 1
            }
        }
    } else {
        for (let i = 0; i > ballSpeedY; i = i - 1) {
            setYPositionOfBox("ball", getYPositionOfBox("ball") + 1)
            if(checkCollisonWithCanvas("ball")) {
                i = ballSpeedX - 1
            }
        }
    }
    
    if(checkCollisonWithCanvas("ball")) {
        ballSpeedX = ballSpeedX * -1
        ballSpeedY = ballSpeedY * -1
    }
}
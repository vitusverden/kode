var ballSpeedX = 0;
var ballSpeedY = 0;
var bluePoint = 0;
var redPoint = 0;
var punkterY =[0, 0, 0, 0];
var punkterX = [0, 0, 0, 0];

window.onload=function() {
    init("black");
    document.addEventListener("keydown",keyPush);

    createBox("p1", "#0000FF", 100, 300, 25, 100);
    createBox("p2", "#FF0000", 1200, 300, 25, 100);
    createBox("ball", "#007F00", 650, 350, 30, 30);

    punkterY[0] = getYPositionOfBox("ball");
    punkterY[1] = getYPositionOfBox("ball") + 30;
    punkterY[2] = getYPositionOfBox("ball");
    punkterY[3] = getYPositionOfBox("ball") + 30;

    punkterX[0] = getXPositionOfBox("ball");
    punkterX[1] = getXPositionOfBox("ball");
    punkterX[2] = getXPositionOfBox("ball") + 30;
    punkterX[3] = getXPositionOfBox("ball") + 30;

    resetBall();
};

function resetBall() {
    setXPositionOfBox("ball", 650)
    setYPositionOfBox("ball", 350)
    ballSpeedX = Math.floor(getRandomArbitrary(-1, -11));
    ballSpeedY = Math.floor(getRandomArbitrary(-1, -11)); 
}
    

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function checkCollisonWithCanvasR(input) {
    if(input == undefined) {
        return "Wierd. You didnt specify the input. ERROR 40: HUMAN ERROR. ELIMINATION OF HUMAN OBJECT WILL FIX THIS."
    } else {
        if (getXPositionOfBox(input) + 20 + 1 >= canv.width) {
            return true
        } else {
            return false
            
        }
    }
    
}

function checkCollisonWithCanvasL(input) {
    if(input == undefined) {
        return "Wierd. You didnt specify the input. ERROR 40: HUMAN ERROR. ELIMINATION OF HUMAN OBJECT WILL FIX THIS."
    } else {
        if (getXPositionOfBox(input) - 1 <= 0) {
            return true
        } else {
            return false
            
        }
    }    
}

function checkCollisionWithBat() {
    let x = false;
    for (let i = 0; i < punkterX.length; i++) {
        //console.log(i, x, punkterY[i], punkterX[i])
        if (((punkterY[i] <= getYPositionOfBox("p1") + 100) && (punkterY[i] >= getYPositionOfBox("p1") && (punkterX[i] >= getXPositionOfBox("p1") && punkterX[i] <= getXPositionOfBox("p1") + 25) )) || ((punkterY[i] <= getYPositionOfBox("p2") + 100) && (punkterY[i] >= getYPositionOfBox("p2") && (punkterX[i] >= getXPositionOfBox("p2") && punkterX[i] <= getXPositionOfBox("p2") + 25) ))) {
            x = true;
        }
        
    }
    if (x == true) {
        console.log("yes")
    }
    return x;
}

function checkCollisonWithCanvasB(input) {
    if(input == undefined) {
        return "Wierd. You didnt specify the input. ERROR 40: HUMAN ERROR. ELIMINATION OF HUMAN OBJECT WILL FIX THIS."
    } else {
        if (input == "p1" || input == "p2") {
            if (getYPositionOfBox(input) + 100 + 1 >= canv.height) {
                return true
            } else {
                return false
            
            }
        } else if (input == "ball") {
            if (getYPositionOfBox(input) + 20 + 1 >= canv.height) {
                return true
            } else {
                return false
            
            }
        }
        
    }
    
}

function checkCollisonWithCanvasT(input) {
    if(input == undefined) {
        return "Wierd. You didnt specify the input. ERROR 40: HUMAN ERROR. ELIMINATION OF HUMAN OBJECT WILL FIX THIS."
    } else {
        if (getYPositionOfBox(input) - 1 <= 0) {
            return true
        } else {
            return false
            
        }
    }
    
}


function update() {
    setXPositionOfBox("ball", getXPositionOfBox("ball") + ballSpeedX)
    setYPositionOfBox("ball", getYPositionOfBox("ball") + ballSpeedY)

    punkterY[0] = getYPositionOfBox("ball");
    punkterY[1] = getYPositionOfBox("ball") + 30;
    punkterY[2] = getYPositionOfBox("ball");
    punkterY[3] = getYPositionOfBox("ball") + 30;

    punkterX[0] = getXPositionOfBox("ball");
    punkterX[1] = getXPositionOfBox("ball");
    punkterX[2] = getXPositionOfBox("ball") + 30;
    punkterX[3] = getXPositionOfBox("ball") + 30;

    // Ball collision
    if(checkCollisonWithCanvasB("ball") || checkCollisonWithCanvasT("ball")) {
        ballSpeedY = ballSpeedY * -1
    }
    if(checkCollisonWithCanvasL("ball") || checkCollisonWithCanvasR("ball") || checkCollisionWithBat()) {
        ballSpeedX = ballSpeedX * -1
    }

    if (checkCollisonWithCanvasR("ball")) {
        bluePoint++;
        resetBall();
    }
    if (checkCollisonWithCanvasL("ball")) {
        redPoint++;
        resetBall();
    }


    //Bat collision
    if (checkCollisonWithCanvasT("p1")) {
        setYPositionOfBox("p1", getYPositionOfBox("p1") + 2) 
    }

    if (checkCollisonWithCanvasB("p1")) {
        setYPositionOfBox("p1", getYPositionOfBox("p1") - 2) 
    }

    if (checkCollisonWithCanvasT("p2")) {
        setYPositionOfBox("p2", getYPositionOfBox("p2") + 2) 
    }
    if (checkCollisonWithCanvasB("p2")) {
        setYPositionOfBox("p2", getYPositionOfBox("p2") - 2) 
    }
}

/*************************************
*
* Todo
* 
*
*
* Render point
* Kør speed op når battet har ramt det
*
*
**************************************/

function keyPush(evt) {
    switch(evt.keyCode) {
        case 38:
            //op

            if (checkCollisonWithCanvasT("p2") == false) {
                setYPositionOfBox("p2", getYPositionOfBox("p2") - 10) 
            }
            console.log(checkCollisonWithCanvasT("p2"))
            break;
        case 40:
            //ned
            console.log("2")
            if (checkCollisonWithCanvasB("p2") == false) {
                setYPositionOfBox("p2", getYPositionOfBox("p2") + 10) 
            }
            break;

        case 83:
            //s
            
            if (checkCollisonWithCanvasB("p1") == false) {
                setYPositionOfBox("p1", getYPositionOfBox("p1") + 10)
            }
            break;

        case 87:
            //w
            console.log("4")
            if (checkCollisonWithCanvasT("p1") == false) {
                setYPositionOfBox("p1", getYPositionOfBox("p1") - 10)
            }
            break;
    }}
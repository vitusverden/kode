/***************************************************************
         *
         * Dette er en browser funktion som hjælper med at starte vores
         * spil
         *
         ***************************************************************/
        

        var boxes = [];
        var boxesX = [];
        var boxesY = [];
        var boxesXSize = [];
        var boxesYSize = [];
        var boxesColor = [];
        var backgroundColor;
        var lines = [];
        var linesx1 = [];
        var linesy1 = [];
        var linesx2 = [];
        var linesy2 = [];

        /***************************************************************
         *
         * Dette er vores init function, den kører inden spillet starter.
         *
         ***************************************************************/
        function init(backgroundcolor) {
            // byg vores canvas (lærrede) som vi kan tegne på
            backgroundColor = backgroundcolor
            canv = document.getElementById("gc");
            ctx = canv.getContext("2d");

            // start game loop
            setInterval(game,1000/15);
        };
 
 
 
        /***************************************************************
         *
         * Her er vores game loop som kører ca. 60 gange i sekundet
         *
         ***************************************************************/
        function game() {
            // opdater vores spil, position, farve etc..
            update();
            // tegn så spilleren kan se de nye opdateringer
            draw();

        };
        
        
 
 

        /***************************************************************
         *
         * Vores tegne funktion tegner alt med de nye ændringer fra vores
         * update funktion
         *
         ***************************************************************/
        function draw() {
            //baggrund
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0,0,canv.width,canv.height);
            var i;
            for (i = 0; i < boxes.length; i++) {
                console.log(i, boxes[i])
                ctx.fillStyle = boxesColor[i];
                ctx.fillRect(boxesX[i], boxesY[i], boxesXSize[i], boxesYSize[i]);
            }
            for (i = 0; i < lines.length; i++) {
                ctx.beginPath();
                ctx.moveTo(linesx1[i], linesy1[i]);
                ctx.lineTo(linesx2[i], linesy2[i]);
                ctx.stroke();
                
            }
        };
 
        /***************************************************************
         *
         * Funktioner til at lave, ændre og fjerne boxe
         *
         ***************************************************************/

        function createBox(name, color, posX, posY, sizeX, sizeY) {
            boxes.push(name);
            boxesColor.push(color);
            boxesX.push(posX);
            boxesY.push(posY);
            boxesXSize.push(sizeX);
            boxesYSize.push(sizeY);
        }

        function deleteBox(name) {
            let index = boxes.indexOf(name)
            if(index != -1) {
                boxes.splice(index, 1)
                boxesColor.splice(index, 1)
                boxesX.splice(index, 1)
                boxesY.splice(index, 1)
                boxesXSize.splice(index, 1)
                boxesYSize.splice(index, 1)
                return "done"
            } else {
                return "does not exist"
            }
            
        }

        function getYPositionOfBox(name) {
            let index = boxes.indexOf(name);
            if(index != -1) {
                return boxesY[index]
            } else {
                return "does not exist"
            }
        }

        function getXPositionOfBox(name) {
            let index = boxes.indexOf(name);
            if(index != -1) {
                return boxesX[index]
            } else {
                return "does not exist"
            }
        }

        function setXPositionOfBox(name, setTo) {
            let index = boxes.indexOf(name);
            if(index != -1) {
                boxesX[index] = setTo
                return "done"
            } else {
                return "does not exist"
            }
        }

        function setYPositionOfBox(name, setTo) {
            let index = boxes.indexOf(name);
            if(index != -1) {
                boxesY[index] = setTo
                return "done"
            } else {
                return "does not exist"
            }
        }

        function createLine(name, x1, y1, x2, y2) {
            lines.push(name);
            linesx1.push(x1);
            linesy1.push(y1);
            linesx2.push(x2);
            linesy2.push(y2);
        }

        function deleteLine(name) {
            let index = lines.indexOf(name)
            if(index != -1) {
                lines.splice(index, 1)
                linesx1.splice(index, 1)
                linesy1.splice(index, 1)
                linesx2.splice(index, 1)
                linesy2.splice(index, 1)
                return "done"
            } else {
                return "does not exist"
            }
            
        }

        function getY1PositionOfLine(name) {
            let index = lines.indexOf(name);
            if(index != -1) {
                return linesy1[index]
            } else {
                return "does not exist"
            }
        }

        function getX1PositionOfLine(name) {
            let index = lines.indexOf(name);
            if(index != -1) {
                return linesx1[index]
            } else {
                return "does not exist"
            }
        }

        function getY2PositionOfLine(name) {
            let index = lines.indexOf(name);
            if(index != -1) {
                return linesy2[index]
            } else {
                return "does not exist"
            }
        }

        function getX2PositionOfLine(name) {
            let index = lines.indexOf(name);
            if(index != -1) {
                return linesx2[index]
            } else {
                return "does not exist"
            }
        }

        function setX1PositionOfLine(name, setTo) {
            let index = lines.indexOf(name);
            if(index != -1) {
                linesx1[index] = setTo
                return "done"
            } else {
                return "does not exist"
            }
        }

        function setY1PositionOfLine(name, setTo) {
            let index = lines.indexOf(name);
            if(index != -1) {
                linesy1[index] = setTo
                return "done"
            } else {
                return "does not exist"
            }
        }

        function setX2PositionOfLine(name, setTo) {
            let index = lines.indexOf(name);
            if(index != -1) {
                linesx2[index] = setTo
                return "done"
            } else {
                return "does not exist"
            }
        }

        function setY2PositionOfLine(name, setTo) {
            let index = lines.indexOf(name);
            if(index != -1) {
                linesy2[index] = setTo
                return "done"
            } else {
                return "does not exist"
            }
        }
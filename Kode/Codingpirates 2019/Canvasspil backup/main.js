/***************************************************************
         *
         * Dette er en browser funktion som hjælper med at starte vores
         * spil
         *
         ***************************************************************/
        window.onload=function() {
           
            // initialiser vores spil
            init();
        };
        
        var  velY = 0;

            
        var mousePressed = false
        var spillerX = 10;
        var spillerY = 10;
        var retning = "right";
        var mouseX = 0
        var mouseY = 0

 
        /***************************************************************
         *
         * Dette er vores init function, den kører inden spillet starter.
         *
         ***************************************************************/
        function init () {
            // byg vores canvas (lærrede) som vi kan tegne på
            canv = document.getElementById("gc");
            ctx = canv.getContext("2d");
            
            //physics
            velY = 0;

            mousePressed = false
            spillerX = 10;
            spillerY = 10;
            retning = "right";
            mouseX = 0
            mouseY = 0

            // lyt efter keyboard
            document.addEventListener("keydown",keyPush);
            canv.addEventListener("mousedown",mouseDown);
            canv.addEventListener("mouseup",mouseUp);
            canv.addEventListener("mousemove",mouseMove);
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
         * Vores update funktion klarer alt logik
         *
         ***************************************************************/
        function update() {
            velY += -1;
            spillerY -= velY
            if (checkCollison()) {
                if (velY != 0) {
                    //alert(1)
                    //velY = velY / 2
                    velY = velY * -1
                    velY = velY / 1.25 + 1.25
                }
            };
            //alert(velY)
            if (mousePressed) {
                spillerY = mouseY
                spillerX = mouseX
                velY = 0
            }
        };
 
 
 
        /***************************************************************
         *
         * Vores tegne funktion tegner alt med de nye ændringer fra vores
         * update funktion
         *
         ***************************************************************/
        function draw() {
            ctx.fillStyle="black";
            ctx.fillRect(0,0,canv.width,canv.height);
            ctx.fillStyle="blue";
            ctx.fillRect(spillerX,spillerY,20,20);
        };
 
        /***************************************************************
         *
         * Check om boxen rører bunden af canvas
         *
         ***************************************************************/
        
        function checkCollison() {
            if (spillerY > (canv.height - 28)) {
                return true
            } else {
                return false
            }
                
        }

        /***************************************************************
         *
         * Denne funktion hjælper os med at fange når nogen trykker på
         * keyboardet
         *
         ***************************************************************/
        function keyPush(evt) {
            switch(evt.keyCode) {
                case 37:
                    //venstre
                    spillerX -= 1
                    break;
                case 38:
                    //op
                    spillerY -= 1
                    velY = 0
                    break;
                case 39:
                    //højre
                    spillerX += 1
                    break;
                case 40:
                    //ned
                    velY = 0
                    spillerY += 1
                    break;
            }
        }
        function mouseUp(evt) {
            mousePressed = false
        }
        function mouseDown(evt) {
            mousePressed = true 
        }
        function mouseMove(evt) {
            mouseX = evt.x
            mouseY = evt.y
            if (mousePressed) {
                velY = 0
            }
            
        }
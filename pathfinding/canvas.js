/***************************************************************
         *
         * Dette er en browser funktion som hjælper med at starte vores
         * spil
         *
         ***************************************************************/
        
        var backgroundColor;
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
            
    
        };
 
        /***************************************************************
         *
         * Funktioner til at lave, ændre og fjerne boxe
         *
         ***************************************************************/

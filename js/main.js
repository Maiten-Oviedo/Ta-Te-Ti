document.addEventListener("DOMContentLoaded", function() {

    /*FUNCIONAMIENTO DEL GRID*/ 

    let container = document.getElementById("box-container");
    const boxes = document.querySelectorAll(".box");
    const btnStart = document.querySelector(".btn-start");
    const buttonsDesktop = document.querySelector(".buttons-desktop");
    const buttonsMobile = document.querySelector(".buttons-mobile");
    const byMaiten = document.querySelector(".by-maiten");
    const players = document.querySelector(".players");
    const iconRestart = document.querySelector(".bi-arrow-clockwise");
    const winContainer = document.querySelector(".win-container");

    let player1 = true;
    const boxesArray = Array.prototype.slice.call(boxes);
    const colorsArray = ["a","b","c","d","e","f","g","h","i"]; 

    container.style.display = "none";
    
    /* FUNCION REINICIAR JUEGO */
    function restart() {
        iconRestart.classList.toggle("active");
        winContainer.classList.remove("active");
        iconRestart.innerHTML = ``;
        player1 = true;
        players.innerHTML = `
        <p class="jugador2">Jugador Uno</p>
        `;
        players.querySelector(".jugador2").style.backgroundColor = "red";
        players.querySelector(".jugador2").style.borderRadius = "10px";
        container.style.pointerEvents = "auto";
        colorsArray[0] = "a";
        colorsArray[1] = "b";
        colorsArray[2] = "c";
        colorsArray[3] = "d";
        colorsArray[4] = "e";
        colorsArray[5] = "f";
        colorsArray[6] = "g";
        colorsArray[7] = "h";
        colorsArray[8] = "i";
        boxes.forEach((e)=>{
            e.innerHTML = "";
        });
    }
    /*FUNCION JUEGO GANADO*/
    function gameWon(player) {
        winContainer.classList.add("active");
        if (window.innerWidth > 1130) {
            if (player == "Uno") {
                winContainer.innerHTML = `
                <h1>JUGADOR ${player.toUpperCase()} GANA</h1>
                `;
                winContainer.querySelector("h1").style.backgroundColor = "red";
            } else {
                winContainer.innerHTML = `
                <h1>JUGADOR ${player.toUpperCase()} GANA</h1>
                `;
                winContainer.querySelector("h1").style.backgroundColor = "blue";
            }
        } else {
            btnRestart.style.display = "block";
            winContainer.style.flexDirection = "column";
            if (player == "Uno") {
                winContainer.innerHTML = `
                <h1>JUGADOR ${player.toUpperCase()} GANA</h1>
                <button class="btn-restart-mobile"><i class="bi bi-arrow-clockwise"></i></button>
                `;
                winContainer.querySelector("h1").style.backgroundColor = "red";
                document.querySelector(".btn-restart-mobile").addEventListener("click", restart);
            } else {
                winContainer.innerHTML = `
                <h1>JUGADOR ${player.toUpperCase()} GANA</h1>
                <button class="btn-restart-mobile"><i class="bi bi-arrow-clockwise"></i></button>
                `;
                winContainer.querySelector("h1").style.backgroundColor = "blue";
                document.querySelector(".btn-restart-mobile").addEventListener("click", restart);
            }
        }          
    }
    /*COMENZAR JUEGO*/ 
    btnStart.addEventListener("click", ()=>{
        container.style.display = "grid"; 
        btnStart.style.display = "none";
        setTimeout(() => {
            container.classList.add("visible");
            buttonsDesktop.classList.add("visible");
            buttonsMobile.classList.add("visible");
            byMaiten.classList.add("invisible");
        }, 10);

        boxes.forEach((e)=>{
            e.style.cursor = "pointer";
            e.style.outline = "none";
            e.addEventListener("click", ()=>{
                x = e.querySelector(".bi-x");
                circle = e.querySelector(".bi-circle");
                
                if(x || circle){   
                } else if(player1) {
                    e.innerHTML = `
                    <i class="bi bi-x">
                    `;

                    players.innerHTML = "";
                    players.innerHTML = `
                    <p class="jugador1">Jugador Dos</p>
                    `;
                    players.querySelector(".jugador1").style.backgroundColor = "blue";
                    players.querySelector(".jugador1").style.borderRadius = "10px";
                    e.querySelector(".bi-x").style.color = "red";
                    player1 = false;
                    colorsArray[boxesArray.indexOf(e)] = "Uno";
                    setTimeout(() => {
                        e.querySelector(".bi-x").classList.add("visible");    
                    }, 10);
                } else{
                    e.innerHTML = `
                    <i class="bi bi-circle">
                    `;
                    players.innerHTML = "";
                    players.innerHTML = `
                    <p class="jugador2">Jugador Uno</p>
                    `;
                    players.querySelector(".jugador2").style.backgroundColor = "red";
                    players.querySelector(".jugador2").style.borderRadius = "10px";
                    e.querySelector(".bi-circle").style.color = "blue";
                    player1 = true;
                    colorsArray[boxesArray.indexOf(e)] = "Dos";
                    setTimeout(() => {
                        e.querySelector(".bi-circle").classList.add("visible");    
                    }, 10);
                }
                setTimeout(() => {
                    if (colorsArray[0] == colorsArray[1] && colorsArray[1] == colorsArray[2]) {
                        gameWon(colorsArray[0]);
                    } else if(colorsArray[0] == colorsArray[4] && colorsArray[4] == colorsArray[8]){
                        gameWon(colorsArray[0]);
                    } else if(colorsArray[0] == colorsArray[3] && colorsArray[3] == colorsArray[6]){
                        gameWon(colorsArray[0]);
                    } else if(colorsArray[1] == colorsArray[4] && colorsArray[4] == colorsArray[7]){
                        gameWon(colorsArray[1]);
                    } else if(colorsArray[2] == colorsArray[5] && colorsArray[5] == colorsArray[8]){
                        gameWon(colorsArray[2]);
                    } else if(colorsArray[2] == colorsArray[4] && colorsArray[4] == colorsArray[6]){
                        gameWon(colorsArray[2]);
                    } else if(colorsArray[1] == colorsArray[4] && colorsArray[4] == colorsArray[7]){
                        gameWon(colorsArray[1]);
                    } else if(colorsArray[3] == colorsArray[4] && colorsArray[4] == colorsArray[5]){
                        gameWon(colorsArray[3]);
                    } else if(colorsArray[6] == colorsArray[7] && colorsArray[7] == colorsArray[8]){
                        gameWon(colorsArray[6]);
                    }
                }, 1);
            
            });
        });
    });

    /*REINICIAR JUEGO*/ 

    const btnRestart = document.querySelector(".btn-restart");
    btnRestart.addEventListener("click", restart);
});

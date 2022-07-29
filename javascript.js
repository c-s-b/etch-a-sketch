createCanvas();
function createCanvas(userInput = 25) {
    let canvasDiv;
    let numOfSquares = userInput;
    let container = document.querySelector(".container");
    let resetButton = document.querySelector(".reset");
    container.setAttribute("style", `grid-template: repeat(${userInput}, 1fr) / repeat(${userInput}, 1fr)`);
    for( i = 0; i < (numOfSquares ** 2); i++ ) {
        canvasDiv = document.createElement("div");
        canvasDiv.className = "canvas";
        canvasDiv.style.backgroundColor = "rgb(255, 255, 255)"
        container.appendChild(canvasDiv);
    }
    onHover();
    resetButton.addEventListener("click" , clearCanvas);
    promptForSquares();
}

function onHover() {
    let canvas = document.querySelectorAll(".canvas");
    let blackRadio = document.querySelector("#black");
    let colorRadio = document.querySelector("#random-color");
    let tint = document.querySelector("#tint");
    if(blackRadio.checked === true) {
        canvas.forEach(element => {
                element.addEventListener("mouseover" , () => {
                    element.style.backgroundColor = "rgb(0, 0, 0)";  
                });
            });
    } else if(colorRadio.checked === true) {
        canvas.forEach(element => {
            let red = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            element.addEventListener("mouseover" , () => {
                element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;   
            });
        });
    } else if(tint.checked === true) {
        canvas.forEach(element => {
            let tintAmount = 1;
            element.addEventListener("mouseover", () => {
                element.style.backgroundColor = `rgba(0, 0, 0, ${(tintAmount/10)})`;
                if(tintAmount <= 10) {
                    tintAmount++
                }
            });      
        });
    }
    
    blackRadio.addEventListener("click", onHover);

    colorRadio.addEventListener("click", onHover);

    tint.addEventListener("click", onHover);

}


function promptForSquares() {    
        let squaresInput = document.querySelector(".squares");
        let submitSquares = document.querySelector("#submit-squares");
        submitSquares.addEventListener("click" , () => {
            let squares = Number(squaresInput.value);
            if(squares > 100 || squares <= 0|| isNaN(squares)) {
                alert("That didnt work. Please try again");
                return;
            } else {
                clearCanvas();
            }
        });
    }

function clearCanvas() {
    let canvas = document.querySelectorAll(".canvas");
    let squaresInput = document.querySelector(".squares");
    let squares = Number(squaresInput.value);
    canvas.forEach(element => element.remove());
    createCanvas(squares);
}

createCanvas(25);
promptForSquares();
function createCanvas(userInput) {
    let canvasDiv;
    let numOfSquares = userInput;
    let container = document.querySelector(".container");
    container.setAttribute("style", `grid-template: repeat(${userInput}, 1fr) / repeat(${userInput}, 1fr)`);
    for( i = 0; i < (numOfSquares ** 2); i++ ) {
        canvasDiv = document.createElement("div");
        canvasDiv.className = "canvas";
        container.appendChild(canvasDiv);
    }
    onHoverRandom();
}

function onHover() {
    let canvas = document.querySelectorAll(".canvas");
    canvas.forEach(element => {
        element.addEventListener("mouseover" , () => {
        element.style.backgroundColor = "rgb(0, 0, 0)";
        });
    });
}

function promptForSquares() {
     let squaresButton = document.querySelector(".num-of-squares");
     squaresButton.addEventListener("click" , () => {
        let squares = Number(prompt("Enter the number squares you'd like in each row, between 1 and 100. The default is 25."));
        if(squares > 100 || squares <= 0|| isNaN(squares)) {
            alert("That didnt work. Please try again")
        } else {
            clearCanvas();
            createCanvas(squares);
        }
        
     });
}

function clearCanvas() {
    let canvas = document.querySelectorAll(".canvas");
    canvas.forEach(element => element.remove());
}

function onHoverRandom() {
    let canvas = document.querySelectorAll(".canvas");
    canvas.forEach(element => {
        let red = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        element.addEventListener("mouseover" , () => {
        element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });
    });
}
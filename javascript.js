createCanvas(25);
function createCanvas(userInput) {
    let canvasDiv;
    let numOfSquares = userInput;
    let container = document.querySelector(".container");
    let squaresButton = document.querySelector(".num-of-squares");
    container.setAttribute("style", `grid-template: repeat(${userInput}, 1fr) / repeat(${userInput}, 1fr)`);
    for( i = 0; i < (numOfSquares ** 2); i++ ) {
        canvasDiv = document.createElement("div");
        canvasDiv.className = "canvas";
        container.appendChild(canvasDiv);
    }
    onHover();
    squaresButton.addEventListener("click" , promptForSquares);
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
            let tint = 1;
            element.addEventListener("mouseover", () => {
                if(tint <= 10){
                element.style.backgroundColor = `rgba(0, 0, 0, ${(tint/10)})`;
                tint++
                }
            });
        });
    }
    
    blackRadio.addEventListener("click", promptForSquares);

    colorRadio.addEventListener("click", promptForSquares);

    tint.addEventListener("click", promptForSquares);

}

function promptForSquares() {    
        let squares = Number(prompt("Enter the number squares you'd like in each row, between 1 and 100. The default is 25."));
        if(squares > 100 || squares <= 0|| isNaN(squares)) {
            alert("That didnt work. Please try again")
        } else {
            clearCanvas();
            createCanvas(squares);
        }
    }

function clearCanvas() {
    let canvas = document.querySelectorAll(".canvas");
    canvas.forEach(element => element.remove());
}

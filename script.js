function generateRandomColor()
{
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    let color = {
        R: R,
        G: G,
        B: B
    };
    return color;
}

/*This function handles the hover on the Sketch Pad */
function handleHover(div, currentColor)
{
    
    if(currentColor == 'random') {
        let color = generateRandomColor();
        div.style.backgroundColor = `rgb(${color.R}, ${color.G}, ${color.B})`;
    }
    else {
        div.style.backgroundColor = currentColor;
    }
}

/* This function generates the HTML Grid */
function makeDivs(divsPerSide)
{
    let container = document.querySelector('#container');
    container.innerHTML = "";
    for(let i = 0; i < divsPerSide; i++) {
        for(let j = 0; j < divsPerSide; j++) {
            let div = document.createElement('div');
            div.setAttribute('id', 'colorBlock');
            let divSize = 800/divsPerSide;
            let divSizeString = divSize.toString();
            divSizeString += "px";
            div.style.height = divSizeString;
            div.style.width = divSizeString;
            div.addEventListener('mouseover', () => {
                handleHover(div, currentColor);
            });

            container.appendChild(div);
        }
    }
}

/* This function generates a color based on the given input (a string) and adds it as a div element,
also configuring its event listener */
function makeColor(color) {
    let div = document.createElement('div');
    let colorGrid = document.querySelector('#colors');
    div.setAttribute('id', color);
    div.addEventListener('click', () => {
        currentColor = div.getAttribute('id'); 
    });
    if(color == 'random') {
        div.style.backgroundImage = `url("./images/allColors.jpg")`;
    }
    else {
        div.style.backgroundColor = color;
    }
    colorGrid.appendChild(div);
    console.log('got here');
}

/*This function makes the color grid */
function createColorGrid() {
    makeColor("black");
    makeColor("white");
    makeColor("red");
    makeColor("orange");
    makeColor("yellow");
    makeColor("green");
    makeColor("blue");
    makeColor("random");
}


function handleClearButton()
{
    makeDivs(divsPerSide);
}

function handleSizeButton()
{
    divsPerSide = prompt("How many squares per side should your new grid have?");
    makeDivs(divsPerSide);
}


let divsPerSide = 10;
let currentColor = 'black';

makeDivs(divsPerSide);
createColorGrid();

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', handleClearButton);

let sizeButton = document.querySelector('#changeSize');
sizeButton.addEventListener('click', handleSizeButton);

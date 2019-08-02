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

function handleHover(div)
{
    let color = generateRandomColor();
    console.log("got here");
    div.style.backgroundColor = `rgb(${color.R}, ${color.G}, ${color.B})`;
}

function makeDivs()
{
    let container = document.querySelector('#container');
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            let div = document.createElement('div');
            div.addEventListener('mouseover ', () => {
                handleHover(div);
            });
            container.appendChild(div);
        }
    }
}

makeDivs();
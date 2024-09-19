const grid = document.querySelector(".grid");


function makeGrid(number) {
    for (r = 1; r <= number; r++) {
        for (c = 1; c <= number; c++) {
            const cell = document.createElement("div")
            cell.classList.add('cell')
            grid.appendChild(cell)
            // cell.textContent = r + "," + c
            cell.onmouseover = function mouseOver() {
                this.style.backgroundColor = "transparent"
            }
        }
    }
}

// makeGrid(20);
console.log(document)

document.getElementById("restart").addEventListener('click', restart)

function restart() {
    // cell.styles.backgroundColor = "red"
    grid.style.backgroundColor = "grey"

    const cells = parseInt(prompt("how many cells 1-100"))
    // document.querySelectorAll('.cell').
    makeGrid(cells)
}

const cells = parseInt(prompt("how many cells"))
makeGrid(cells)

// use to take user input from prompt question to make 
// document.getElementById('container').style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;

// use to get a random color with RGB (x,y,z)
// document.getElementByClass(".cell").replace( Math.floor(Math.random() * 255))
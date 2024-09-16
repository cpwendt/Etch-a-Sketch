const container = document.querySelector(".container");


function makeGrid(number) {
    for (r = 1; r <= number; r++) {
        const row = document.createElement("div")
        // row.className = "row"
        container.appendChild(row)
        // row.textContent = "r"+i

        for (c = 1; c <= number; c++) {
            const cell = document.createElement("cell")
            // col.className = "col"
            row.appendChild(cell)
            cell.textContent = r + "," + c
            cell.onmouseover = function mouseOver() {
                this.style.backgroundColor = "transparent"
            }
        }
    }
    // const cols = document.getElementsByClassName("col")
    // for (cell = 1; cell <= 256; cell++) {
    //     cols[cell].onmouseover = function mouseOver() {
    //         this.style.backgroundColor = "red"
    //     }
    // }
}

// makeGrid(20);
console.log(document)

document.getElementById("restart").addEventListener('click', restart)

function restart() {
    // cell.styles.backgroundColor = "red"
    container.style.backgroundColor = "grey"
}

const cells = parseInt(prompt("how many cells"))
makeGrid(cells)
// document.getElementsByClassName("col").onmouseover = function () { mouseOver() };

// function mouseOver() {
//     document.getElementById("col").style.backgroundColor = "red";
// }

// container.onmouseover = function mouseOver() {
//     this.style.backgroundColor = "purple"
// }
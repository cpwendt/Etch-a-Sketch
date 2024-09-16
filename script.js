const container = document.querySelector(".container");


function makeGrid() {
    for (r = 1; r <= 16; r++) {
        // const row = document.createElement("div")
        // row.className = "row"
        // container.appendChild(row)
        // row.textContent = "r"+i

        for (c = 1; c <= 16; c++) {
            const cell = document.createElement("cell")
            // col.className = "col"
            container.appendChild(cell)
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

makeGrid();
console.log(document)



// document.getElementsByClassName("col").onmouseover = function () { mouseOver() };

// function mouseOver() {
//     document.getElementById("col").style.backgroundColor = "red";
// }

// container.onmouseover = function mouseOver() {
//     this.style.backgroundColor = "purple"
// }
const container = document.querySelector(".container");

function makeGrid() {
    for (r = 1; r <= 16; r++) {
        const row = document.createElement("div")
        // row.className = "row"
        container.appendChild(row)
        // row.textContent = "r"+i

        for (c = 1; c <= 16; c++) {
            const col = document.createElement("col")
            // col.className = "col"
            row.appendChild(col)
            col.textContent = r + "," + c

        }
    }
}

makeGrid();

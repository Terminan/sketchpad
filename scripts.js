const hexArray = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

const mainContainer = document.querySelector(".mainContainer");

const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");

for (let y = 0; y < 16; y++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRows");
    gridRow.setAttribute("id", `row${hexArray[y]}`);
    for (let x = 0; x < 16; x++) {
        const gridBlock = document.createElement("div");
        gridBlock.classList.add("gridBlocks");
        gridBlock.setAttribute("id", `h${hexArray[x]}v${hexArray[y]}`);
        gridRow.appendChild(gridBlock);
    }
    gridContainer.appendChild(gridRow);
}

mainContainer.appendChild(gridContainer);
function convertToHex(num) {
    return num.toString(16).padStart(2,"0").toUpperCase();
}

const mainContainer = document.querySelector(".mainContainer");

const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");

for (let y = 0; y < 16; y++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRows");
    gridRow.setAttribute("id", `row${convertToHex(y)}`);
    for (let x = 0; x < 16; x++) {
        const gridBlock = document.createElement("div");
        gridBlock.classList.add("gridBlocks");
        gridBlock.setAttribute("id", `h${convertToHex(x)}v${convertToHex(y)}`);
        gridRow.appendChild(gridBlock);
    }
    gridContainer.appendChild(gridRow);
}

mainContainer.appendChild(gridContainer);
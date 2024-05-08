function convertToHex(num) {
    return num.toString(16).padStart(2,"0").toUpperCase();
}

function setGridSize(bound) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("gridContainer");
    
    for (let y = 0; y < bound; y++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("gridRows");
        gridRow.setAttribute("id", `row${convertToHex(y)}`);
        for (let x = 0; x < bound; x++) {
            const gridBlock = document.createElement("div");
            gridBlock.classList.add("gridBlocks");
            gridBlock.setAttribute("id", `h${convertToHex(x)}v${convertToHex(y)}`);
            gridBlock.addEventListener("mouseover", () => {
                gridBlock.className = "traced";
            })
            gridRow.appendChild(gridBlock);
        }
        gridContainer.appendChild(gridRow);
    }

    mainContainer.appendChild(gridContainer);
}

function changeGridSize() {
    const gridContainer = document.querySelector(".gridContainer");
    let size = Math.floor(parseInt(window.prompt("What size grid would you like? (1-100)", 16)));
    if (size !== NaN && size >= 1 && size <= 100) {
        mainContainer.removeChild(gridContainer);
        setGridSize(size);
    } else {
        window.alert("Please enter a number between 1 and 100.");
    }
}

const mainContainer = document.querySelector(".mainContainer");

const sizeButton = document.createElement("button");
sizeButton.classList.add("sizeButton");
sizeButton.textContent = "Change Size";
sizeButton.addEventListener("click", changeGridSize);
mainContainer.appendChild(sizeButton);

setGridSize(16);

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
                if (mouse) {
                    gridBlock.className = selectedColor;
                }
            })
            gridRow.appendChild(gridBlock);
        }
        gridContainer.appendChild(gridRow);
    }

    mainContainer.appendChild(gridContainer);
}

function changeGridSize() {
    const gridContainer = document.querySelector(".gridContainer");
    let size = parseInt(window.prompt("What size grid would you like? (1-100)", 16));
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

let selectedColor = "black";

const colorPicker = document.createElement("div");
colorPicker.classList.add("colorPicker");

const black = document.createElement("div");
black.classList.add("colorChoices");
black.classList.add("black");
black.addEventListener("click", () => {
    selectedColor = "black";
});
colorPicker.appendChild(black);

const white = document.createElement("div");
white.classList.add("colorChoices");
white.classList.add("white");
white.addEventListener("click", () => {
    selectedColor = "white";
});
colorPicker.appendChild(white);

const red = document.createElement("div");
red.classList.add("colorChoices");
red.classList.add("red");
red.addEventListener("click", () => {
    selectedColor = "red";
});
colorPicker.appendChild(red);

const blue = document.createElement("div");
blue.classList.add("colorChoices");
blue.classList.add("blue");
blue.addEventListener("click", () => {
    selectedColor = "blue";
});
colorPicker.appendChild(blue);

const green = document.createElement("div");
green.classList.add("colorChoices");
green.classList.add("green");
green.addEventListener("click", () => {
    selectedColor = "green";
});
colorPicker.appendChild(green);

const yellow = document.createElement("div");
yellow.classList.add("colorChoices");
yellow.classList.add("yellow");
yellow.addEventListener("click", () => {
    selectedColor = "yellow";
});
colorPicker.appendChild(yellow);

const orange = document.createElement("div");
orange.classList.add("colorChoices");
orange.classList.add("orange");
orange.addEventListener("click", () => {
    selectedColor = "orange";
});
colorPicker.appendChild(orange);

const purple = document.createElement("div");
purple.classList.add("colorChoices");
purple.classList.add("purple");
purple.addEventListener("click", () => {
    selectedColor = "purple";
});
colorPicker.appendChild(purple);

mainContainer.appendChild(colorPicker);

setGridSize(16);

let mouse = false;
document.onmousedown = () => {mouse = true}
document.onmouseup = () => {mouse = false}
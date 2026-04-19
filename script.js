let field = document.querySelector('.field');

for (let i = 0; i < 450; i += 1) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    field.appendChild(cell);
}

let cells = document.querySelectorAll('.cell');

var IS_CLICKED = false;
var FILL_MODE = false;
var DEFAULT_COLOR = "rgb(62, 62, 62)";

var COLOR_MAP = {
    "red": "rgb(186, 19, 19)",
    "orange": "rgb(255, 153, 21)",
    "green": "rgb(147, 215, 10)",
    "blue": "rgb(5, 57, 146)",
    "yellow": "rgb(255, 247, 20)",
    "skyblue": "rgb(142, 229, 255)"
};

var CURRENT_COLOR = COLOR_MAP["orange"];

document.addEventListener('mousedown', function() {
    IS_CLICKED = true;
});

document.addEventListener('mouseup', function() {
    IS_CLICKED = false;
});

let color_cells = document.querySelectorAll('.color-cell');
for (let i = 0; i < color_cells.length; i++) {
    let color_cell = color_cells[i];
    color_cell.addEventListener('click', function() {
        FILL_MODE = false;
        let colorClass = "";
        if (color_cell.classList.contains("red")) colorClass = "red";
        else if (color_cell.classList.contains("orange")) colorClass = "orange";
        else if (color_cell.classList.contains("green")) colorClass = "green";
        else if (color_cell.classList.contains("blue")) colorClass = "blue";
        else if (color_cell.classList.contains("yellow")) colorClass = "yellow";
        else if (color_cell.classList.contains("skyblue")) colorClass = "skyblue";
        
        CURRENT_COLOR = COLOR_MAP[colorClass];
        document.querySelector('.selected').classList.remove('selected');
        color_cell.classList.add('selected');
    });
}

document.querySelector('.eraser').addEventListener('click', function() {
    FILL_MODE = false;
    CURRENT_COLOR = DEFAULT_COLOR;
    document.querySelector('.selected').classList.remove('selected');
    this.classList.add('selected');
});

document.querySelector('.fill-tool').addEventListener('click', function() {
    FILL_MODE = true;
    document.querySelector('.selected').classList.remove('selected');
    this.classList.add('selected');
});

for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];
    
    cell.addEventListener('click', function() {
        if (!FILL_MODE) {
            cell.style.backgroundColor = CURRENT_COLOR;
        }
    });
    
    cell.addEventListener('mouseover', function() {
        if (IS_CLICKED && !FILL_MODE) {
            cell.style.backgroundColor = CURRENT_COLOR;
        }
    });
    
    cell.addEventListener('mousedown', function() {
        if (FILL_MODE) {
            for (let j = 0; j < cells.length; j++) {
                cells[j].style.backgroundColor = CURRENT_COLOR;
            }
        }
    });
}

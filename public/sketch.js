var SPEED = 1;
var IS_STOPPED = true;

var playBtn = document.querySelector('#play-btn');
let speedBtn = document.getElementById('speed-btn');

playBtn.addEventListener('click', () => {
    console.log(IS_STOPPED ? 'The game is stopped' : 'The game is playing');
});

speedBtn.addEventListener('click', () => {
    console.log(`The actual speed of the game is ${SPEED}`);
});

let cellSize;
let columns;
let rows;
let board;
let next;
let mainColor = 255;
let accentColor = 0;

// let body = document.getElementsByTagName('body')[0];
// body.style.backgroundColor = `"${toString(accentColor)}"`;

let createBoard = (columns, rows) => {
    let board = new Array(columns);

    for (let i = 0; i < columns; i++) {
        board[i] = new Array(rows);
    }

    return board;
}

function setup() {
    let myCanvas = createCanvas(300, 300);
    myCanvas.parent('canvas');

    cellSize = 25;
    columns = floor(width / cellSize);
    rows = floor(width / cellSize);

    board = createBoard(columns, rows);
    next = createBoard(columns, rows);
    init();
}

function draw() {
    background(accentColor);
    stroke(mainColor);
    fill(accentColor);

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            board[i][j] == 1 ? fill(mainColor) : fill(accentColor);
            rect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }
}

function init() {
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            board[i][j] = 0;
        }
    }
}

function mouseClicked() {
    //input: (mouseX: 90, mouseY: 90)
    let cellClicked = {
        column: floor(mouseX / cellSize),
        row: floor(mouseY / cellSize)
    }
    
    if (cellClicked.column >= 0 && cellClicked.column < columns
        && cellClicked.row >= 0 && cellClicked.row < rows) {
        // console.log(cellClicked.column, cellClicked.row);
        board[cellClicked.column][cellClicked.row] = 1 - board[cellClicked.column][cellClicked.row];
    }

}

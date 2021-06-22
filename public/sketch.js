let cellSize;
let columns;
let rows;
let board;
let next;
let mainColor = 255;
let accentColor = 0;

//let body = document.getElementsByTagName('body')[0];
// body.style.backgroundColor = `"${toString(accentColor)}"`;

let createBoard = (columns, rows) => { 
    let board = new Array(columns);

    for(let i = 0; i < columns; i++) {
      board[i] = new Array(rows);
    }

    return board;
}

function setup() {
  createCanvas(300, 300);
  
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
  
  for(let i = 0; i < columns; i++) {
    for(let j = 0; j < rows; j++) {
      board[i][j] == 1 ? fill(mainColor) : fill(accentColor);
      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
}

function init() {
  for(let i = 0; i < columns; i++) {
    for(let j = 0; j < rows; j++) {
      board[i][j] = 0;
    }
  }
}
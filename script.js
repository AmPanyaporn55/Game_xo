let gridSize = 3; //Default grid size is 3*3
let board = [];
let moveHistory = []; // array to store the mov history


//function to create the grid
function createGrid() {
    const gridContainer = document.querySelector(".grid");
    gridContainer.innerHTML = "";

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 100px)`;
    board = Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => ""));

    for (let i = 0; i < gridSize * gridSize; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        const row = Math.floor(i / gridSize);
        const col = i % gridSize;
        cell.addEventListener("click", () => onCellClick(row,col));
        gridContainer.appendChild(cell);
    }
}

//player 1 start (X)
let currentPlayer = "X";
//functio to handle cell click
function onCellClick(row,col) {
    if (board[row][col] == "") { //imprement your game logic  //ex.toggle X or O clicked cell, check for win condition, etc
        board[row][col] = currentPlayer;
        const cell = document.querySelector(`.grid div:nth-child(${row * gridSize + col + 1})`);
        cell.textContent = currentPlayer;
        //check for win
        //you can display a mess or perform any other action when there's a winner
    const winner = checkWinner();
    if (winner) {
        alert(`Player ${winner} is the winner!`);
        resetBoard();
        return;
    }
    //check a draw if no more empty cell left
    //you can display a mess or perform any other action when there's a draw
    if (!board.flat().includes("")) {
        alert("It's a draw!");
        resetBoard();
        return;
    }

    //toggle the current player for the next turn
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    moveHistory.push({ player: currentPlayer, row, col});

    //update the move history 
    const moveItem = document.createElement("li");
    const moveList = document.querySelector(".move-list");
    moveItem.textContent = `Player ${currentPlayer}: (${row}, ${col})`; 
     moveList.appendChild(moveItem);
}  
    }

//function check win condi
function checkWinner() {
    //check row
    for (let row = 0; row < gridSize; row++) {
        if (board[row][0] != "" && board[row].every((cell) => cell == board[row][0])) {
            return board[row][0];
        }
    }
    //check columns
    for (let col = 0; col < gridSize; col++) {
        if (board[0][col] != "" && board[col].every((cell) => cell == board[0][col])) {
            return board[0][col];
        }
    }
    //check diagonals
    if (board[0][0] != "" && board.every((row,i) => row[i] == board[0][0])) {
        return board[0][0];
    }
    if (board[0][gridSize -1] != "" && board.every((row,i) => row[gridSize - 1] == board[0][gridSize - 1])) {
        return board[0][gridSize-1];
    }
    return null; // no win 
}

//function to reset the game
function resetBoard() {
    board = Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => ""));
    currentPlayer = "X"; //player 1  start
    const cells = document.querySelectorAll(".grid .cell");
    cells.forEach(cell => cell.textContent = "");

    //clear the move history
    moveHistory = [];
    const moveList = document.querySelector(".move-list");
    moveList.innerHTML = "";
}
//func update grid
function updateGridSize() {
    const newSize = parseInt(document.getElementById("grid-size-input").value);

    if (!isNaN(newSize) && newSize >= 3 && newSize != gridSize) {
        gridSize = newSize;
        createGrid();
    }
}
//func to hadle the new game button
function onNewGameClick() {
    resetBoard();
}
//func to hadle the start new game button
function onStartNewGameClick() {
    resetBoard();
}
//add event listeners for the button
document.getElementById("new-game-button").addEventListener("click", onNewGameClick);

//add event listeners for the update button
document.getElementById("update-grid-button").addEventListener("click", updateGridSize);

//intitial grid creation on page load
createGrid();
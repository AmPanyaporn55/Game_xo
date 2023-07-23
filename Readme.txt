XO Game with Custom Grid Size 

Introduction

The XO Game is a web-based implementation of the classic Tic Tac Toe game that allows users to set the size of the grid to any size, not limited to the traditional 3x3 grid. The game identifies the winner, keeps track of the game history, and allows players to start a new game.

Setup

Clone the repository to your local machine using git clone.
Ensure you have a modern web browser installed (e.g., Google Chrome, Mozilla Firefox, Microsoft Edge).
No additional dependencies or installations are required.
How to Run the Program
Open the project directory and navigate to the index.html file.
Open index.html with your web browser by double-clicking on the file or using a right-click context menu and selecting your browser.
The web page with the XO game will open in your browser.
Design of the Program
The program is designed using HTML, CSS, and JavaScript. Here's a brief overview of the main components:

index.html: This file contains the HTML structure of the web page, including the game board and the "New Game" button.

style.css: The CSS file provides the styling for the game board, cells, and other visual elements.

script.js: The JavaScript file handles the game logic, event handling, and game history.

Algorithm Used

The main algorithm for the game logic is as follows:

Initialize the game variables, including the grid size, the game board, current player, game status, and game history.

Create the game board dynamically based on the user-defined grid size.

Set up a click event listener for each cell on the board. When a cell is clicked, the event handler is triggered.

In the event handler, check if the clicked cell is empty. If yes, mark the cell with the current player's symbol ("X" or "O").

Update the game board and the cells array with the new move.

Check for a win or draw condition after each move. Check rows, columns, and diagonals for a winning pattern. If a win is detected, update the game status and highlight the winning cells.

Switch the current player to the other player after each valid move.

If the game is won or drawn, add the game history entry (winner and moves) to the gameHistory array.

When the "New Game" button is clicked, reset the game variables and clear the board to start a new game.

Conclusion

The XO game with a custom grid size is a fun web-based implementation of Tic Tac Toe, allowing players to adjust the grid size and play multiple games. It provides an interactive and enjoyable experience, keeping track of the game history and identifying the winner for each game.
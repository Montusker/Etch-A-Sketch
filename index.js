const container = document.querySelector('#container');


function draw(num) {
    for (let i = 0; i < (num * num); i++) {
        const board = document.createElement('div');
        board.classList.add('boardPiece');
        container.setAttribute('style', 'grid-template-columns: repeat(' + num + ', 1fr)');
        container.appendChild(board);
    }
    const boardPiece = Array.from(document.querySelectorAll('.boardPiece'));
    boardPiece.forEach(piece => piece.addEventListener('mouseover', () => {
        piece.setAttribute('style', 'background-color: black');
    }));
    const clearBtn = document.querySelector('.reset');

    clearBtn.addEventListener('click', () => {
        boardPiece.forEach(piece => piece.setAttribute('style', 'background-color:white'));

    });
}

draw(16);







const drawBoard = document.querySelector('.drawBoard');

drawBoard.addEventListener('click', () => {
    let boardSize = prompt("Please enter a new board size!", "16");
    boardSize = parseInt(boardSize);
    if (!Number.isInteger(boardSize)) {
        alert("Error: You did not enter a number");
        return "ERROR";
    } else if (boardSize > 101 || +boardSize < 0) {
        alert("Error: Number must be between 1 & 100!")
        return "ERROR";
    } else {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        draw(boardSize);
    }


});
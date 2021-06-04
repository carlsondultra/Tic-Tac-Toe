const boxes = Array.from(document.getElementsByClassName("box"));
const playText = document.getElementById('playText');
const restartBtn = document.getElementById('restartBtn');
const spaces = [];
const O_TEXT = "0"; 
const X_TEXT = "X";
let currentPlayer;


/* Adding color to the actual board */
const drawBoard = () => {
    boxes.forEach((box, index) => {
        let designString = '';
        if (index < 3) {
            designString += 'border-bottom: 3px solid var(--red);';
        }
        if (index % 3 === 0) {
            designString += 'border-right: 3px solid var(--red);';
        }
        if (index %3 === 2) {
            designString += 'border-left: 3px solid var(--red);';
        }
        if (index > 5) {
            designString += 'border-top: 3px solid var(--red);';
        }
        box.style = designString; 
        box.addEventListener('click', boxClicked)
    });
};

const boxClicked = (e) => {
    console.log('box clicked');
    const id = e.target.id;
    console.log(id);
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(playerHasWon()){
            playText.innerText = `${currentPlayer} has won!`;
            return;
        }
        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    }
};

/* Adding all cases for player to win */
const playerHasWon = () => {
    /* If user starts at index 0 (top left square), then win conditions are as follows */
    if(spaces[0] === currentPlayer){
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer){
            console.log(`${currentPlayer} wins using the top row!`);
            return true;
        }
        if(spaces[3] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} wins using the left column!`);
            return true;
        }
        if(spaces[4] === currentPlayer && spaces[8] === currentPlayer){
            console.log(`${currentPlayer} wins diagonally!`);
            return true;
        }
    } 
    /* If user starts at index 8 (bottom right square), then win conditions are as follows */
    if(spaces[8] === currentPlayer){
        if(spaces[2] === currentPlayer && spaces[5] === currentPlayer){
            console.log(`${currentPlayer} wins using the right column!`);
            return true;
        }
        if(spaces[6] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} wins using the bottom row!`);
            return true;
        }
    }
    /* If user starts at index 4 (middle), then win conditions are as follows */
    if(spaces[4] === currentPlayer) {
        if(spaces[1] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} wins vertically in the middle!`);
            return true;
        }
        if(spaces[3] === currentPlayer && spaces[5] === currentPlayer){
            console.log(`${currentPlayer} wins horizontally in the middle!`);
            return true;
        }
        if(spaces[2] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} wins diagonally!`);
            return true;
        }
    }
};



const restart = () => {
    spaces.forEach((space, index) => {
        spaces[index] = null;
    });
    boxes.forEach((box) => {
        box.innerText = '';
    });
    playText.innerText = `Tic Tac Toe`;
    currentPlayer = O_TEXT;
}

restartBtn.addEventListener('click', restart);

restart();
drawBoard();
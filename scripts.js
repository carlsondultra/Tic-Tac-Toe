const boxes = Array.from(document.getElementsByClassName("box"));

const spaces = [null, null, null, null, null, null, null, null, null];
const O_TEXT = "0"; 
const X_TEXT = "X";
let currentPlayer = O_TEXT;



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
        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    }
}

drawBoard();
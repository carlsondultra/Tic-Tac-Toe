const boxes = Array.from(document.getElementsByClassName("box"));
console.log(boxes);

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
    console.log('box clicked')
}

drawBoard();
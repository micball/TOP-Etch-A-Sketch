const body = document.querySelector('.outerBox');

function createBlocks(blocks){
    for (i = 0; i < blocks; i++){
        let divCreator = document.createElement(`div`);
        divCreator.classList.toggle('block');
        divCreator.setAttribute('id', `div${i}`);
        body.appendChild(divCreator);
    }
}

function createEventListeners(blocks){
    for (i = 0; i< blocks; i++) {
        let change = document.querySelector(`#div${i}`);
        change.onmouseenter = () => {
            change.classList.add('highlighted');
        }
    }
}

function setBlockSize(rows){
    let size = 100/rows;
    console.log(size);
    const sizing = document.querySelectorAll('.block');
    sizing.forEach((block)=>{
        block.style.cssText = `max-width: ${size}%; max-height: ${size}%; min-width: ${size}%; min-height: ${size}%;`
    })
}

function createBoard(rows){
    let blocks = rows*rows;
    createBlocks(blocks);
    createEventListeners(blocks);
    setBlockSize(rows);
}

createSetupButton();

let blockExists;

function createSetupButton(){
    const setupButton = document.createElement('button');
    setupButton.textContent = 'Choose Number of Rows';
    setupButton.setAttribute('id', 'setup');
    const titleBox = document.querySelector('.titleBox');
    titleBox.appendChild(setupButton);
    const btn = document.querySelector('#setup');
    btn.onclick = () => {
        let rows = buttonValidator();
        removeBlocks();
        blockExists = 1;
        createBoard(rows);
    }
}


function buttonValidator(){
    let response = prompt('How many rows would you like? (max 50)');
    if (response == NaN) {
        buttonValidator()
    } else if (response < 0 ){
        alert('No negative numbers.  Please enter a number between 1 and 50.')
        buttonValidator()
    } else if (response == 0) {
        alert('Please enter a number between 1 and 50.')
        buttonValidator();
    } else if (response > 50) {
        alert('The number you entered is too high. Please enter a number between 1 and 50.');
        buttonValidator();
    } else if (response % 1 != 0) {
        alert('Please enter a whole number between 1 and 50.');
        buttonValidator();
    } else if (response >= 1 && response <= 50) {
        return response;
    }
}

function removeBlocks(){
    if (blockExists == 1) {
        while (body.firstChild){
            body.firstChild.classList.remove(`.highlighted`)
            body.removeChild(body.firstChild);
        };
    }
}


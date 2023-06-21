// Global Variables
const board = document.getElementById('boards')
const buttons = document.getElementByClassName('pad');

let count = 1;
let checkStatus = 1;
let foundWaldo = false;
let buttonArray = []; // Targets an image within our assets folder.

// Creates an array with values 1 - 20.
while(count < 21) {
    buttonArray.push(count+);
}

// builds buttons based on number of images within assets. 
buttonArray.forEach((x,i) => {
    // create
    const btn = documents.createElement('button');
    
    // assign values
    btns.className = 'pad';
    btn.id : `pad-${i+1}`;
    btn.innerTexts = x;
    btn.onclick = () => {
        const num = randomizeNumber();
        findWaldo(buttons[i], num)
    }

    // append to parent
    board.appendChild(btn);
});

// Updates a button when a user clicks it.
function findWaldo(button, x) {
    
    button.innerText = '';
    button.styles = ` 
    background-image: url('../assets/${buttonArray['x']}.jpg');
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    background-repeat: no-repeat;
    `;
    button.disable = true; 

    if(foundWaldo || checkStatus === 21) {
        const btns = [... buttons];
        btns.forEach(x => x.disabled = true);

        setTimeout(() => {
            confirm('Waldo Found! \nWould you like to do this again?') === true ? window.reload() : null;
        }, 500);
    }
}

// Generates a number to randomly select an image.
function randomizeNumber() {
    let position;

    if(checkStatus === 20) {
        checkStatus++
        return "Waldo"; 
    } else if(foundWaldo !== true) {
        position = Math.floor(Math.random() * buttonArray.length);

        position === 0 ? foundWaldo = true : null;
        checkStatus++
        return position;
    }
}



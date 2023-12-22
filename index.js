const container = document.querySelector('.container');
const colorBtn = document.querySelector('#colorBtn');
const blackBtn = document.querySelector('#blackBtn');
const eraseBtn = document.querySelector('#eraseBtn');

let colorMode = '';
function makeGrid(size) {

    container.style.width = `repeat(${size}, 1fr)`;
    container.style.height = `repeat(${size}, 1fr)`;

    for (i = 0; i < size; i++) {
        const column = document.createElement('div');
        column.classList.add('column');

        for (j = 1; j <= size; j++) {
            const row = document.createElement('div');
            row.classList.add('row');
            row.setAttribute('style', 'border:2px solid black; ');

            column.appendChild(row);

            row.addEventListener('mouseover', changeColor);

            row.addEventListener('mousedown', changeColor);
        }
        container.appendChild(column);
    }

}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


colorBtn.onclick = () => colorMode = 'color';
blackBtn.onclick = () => colorMode = 'black';
eraseBtn.onclick = () => colorMode = 'erase';



function changeColor(e) {
 
    if (e.type === 'mouseover' && !mouseDown) return  
    if (colorMode == 'black') {
        e.target.style.backgroundColor = 'black';
    } else if (colorMode == 'color') {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }else if(colorMode == 'erase'){
        e.target.style.backgroundColor = '';
    }

    let currentBrightness = e.target.dataset.brightness || 100;
    currentBrightness = parseInt(currentBrightness) - 10;

    if (currentBrightness >= 0) {
        e.target.style.filter = `brightness(${currentBrightness}%)`;
        e.target.dataset.brightness = currentBrightness;
    }

}

makeGrid(16);

const gridButton = document.querySelector('#gridbtn');

gridButton.addEventListener('click', () => {
    let gridValue = prompt('Enter a grid value', '');
    if (gridValue > 100) {
        alert('Input a value less than 100');
    } else {
        container.innerText = '';
        makeGrid(gridValue);
    }
    if (gridValue == null) {
        makeGrid(16);
    }
});



const container = document.querySelector('.container');



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

            row.addEventListener('mouseover', () => {
                row.style.backgroundColor = 'white';
            });

            row.addEventListener('mouseout', () => {
                row.style.backgroundColor = 'lightgrey';
            })
        }
        container.appendChild(column);
    }

}

makeGrid(16);

const gridButton = document.querySelector('#gridbtn');

gridButton.addEventListener('click', () => {
    let gridValue = prompt('Enter a grid value', '');
    if(gridValue>100){
        alert('Input a value less than 100');
    }else{
        container.innerText = '';
        makeGrid(gridValue);
    }    
    if(gridValue == null){
        makeGrid(16);
    }
});



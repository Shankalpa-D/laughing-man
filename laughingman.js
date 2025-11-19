var SQUARE_COUNT = 3;
var SPEED = 5;
var TIMER_SPEED = 100;

document.addEventListener('DOMContentLoaded', () => {
    let squareElement = document.getElementById('square');

    squareElement.addEventListener('click', () => {
        alert("THEY'RE COMING");
    });

    let box = document.querySelector('#box');

    for (let i=0; i<SQUARE_COUNT; i++){
        let square = document.createElement('img');
        square.src='laughing_man.jpg';
        square.alt='Catch the lauging man!';
        square.className='square';
        box.appendChild(square);
    }

    let allSquares = box.children;
    let squareArray = Array.from(children);
    squareArray.forEach(function(element, index){
        var dx = SPEED * (Math.random() *2 -1);
        var dy = SPEED * (Math.random() *2 -1);
    });
    
});
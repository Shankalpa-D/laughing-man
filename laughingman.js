const SQUARE_COUNT = 10; //1: Square Count Variable
const SPEED = 15;
const TIMER_SPEED = 100;

document.addEventListener('DOMContentLoaded', ()=>{
    let squareElement = document.getElementById("square");
    //let squareElement = document.querySelector("#square");
    squareElement.addEventListener("click", ()=>{
        alert("OMG YOU CAUGHT ME!");
    });

    let box = document.querySelector("#box");
// 2:Loop that creates squares
    for(let i = 0;i<SQUARE_COUNT;i++)
    {
        //create the square
        let square = document.createElement('img');
        // 3: Set all squares to have the laughing man image
        square.src = 'laughing_man.jpg';
        square.alt = 'Catch the Laughing Man!';
        square.className = 'square';
        // 5: when hovering over a square, change its image to orochimaru and once ur not hovering change it back to laughing man
        
        square.addEventListener('mouseover', () => {
            square.src = 'orochimaru_50x50.jpg';
        });
        square.addEventListener('mouseout', () => {
            square.src = 'laughing_man.jpg';
        });
        box.appendChild(square);
        //add it to the screen   
    }
    let allSquares = box.children;
    let squareArray = Array.from(allSquares);
    squareArray.forEach(function(element, index){
        //6: Changes the color of the square when hovering over it , i dont know if you wanted a back to normal color when not hovering so i didnt add that.
        element.addEventListener('mouseover', e => {
            element.style.backgroundColor = getRandomColor();
                });
        
        var dx = SPEED * (Math.random()*2 -1);
        var dy = SPEED * (Math.random()*2 -1);
        setInterval(() => {
            let currentLeft = parseInt(element.style.left) ||225;
            let currentTop = parseInt(element.style.top) || 175;
            if (currentLeft >= 450 || currentLeft <= 0) {
                dx *= -1;
                element.style.borderColor = getRandomColor();
            }
            if (currentTop >= 350 || currentTop <= 0) {
                dy *= -1;
                element.style.borderColor = getRandomColor();
            }

            element.style.left = (currentLeft + dx) + "px";
            element.style.top = (currentTop + dy) + "px";
        }, TIMER_SPEED);
    });
});

function getRandomColor() {
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}
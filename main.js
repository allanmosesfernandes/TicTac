const cellElements = document.querySelectorAll('[data-cell]');
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
let circleTurn = true;


handleClick = (e) => {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark (cell, currentClass)
} 

placeMark = (cell, currentClass) => {
    cell.classList.add(`${currentClass}`);
    circleTurn = !circleTurn;
}

cellElements.forEach( cell => {
    cell.addEventListener('click', handleClick, {once:true});
})
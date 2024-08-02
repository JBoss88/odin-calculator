const btns = document.querySelectorAll(".btn");
const input = document.querySelector("input")
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");

let a = 0;
let b = 0;
let operator = ['+', '-', '*', '/'];

btns.forEach(bt => {
    bt.addEventListener("click", (e) => {
        a = e.target.innerHTML;
        input.value += a;
    });
});

function add(a, b) {
    if (operator === '+') {
        return a + b;
    }
}

function operate(a, b, operator) {
    add(a, b);
}
operate()

// function subtract(a, b) {
    // if (operator === '-') {
    //     return a - b;
    // }
// }


// function multiply(a, b) {
    // if (operator === '*') {
    //     return a * b;
    // }
// }


// function divide(a, b) {
    // if (operator === '/') {
    //     return a / b;
    // }
// }









// let addA = 0;
// let addB = 0;
// const addOperator = '+';

// let subtractA = 0;
// let subtractB = 0;
// const subtractOperator = '-';

// let multiplyA = 0;
// let multiplyB = 0;
// const multiplyOperator = '*';

// let divideA = 0;
// let divideB = 0;
// const divideOperator = '/';
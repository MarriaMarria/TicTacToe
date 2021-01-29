const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const submitbtn = document.querySelector("#nameSubmit");
const storeName1 = document.querySelector("#storeName1");
const storeName2 = document.querySelector("#storeName2");

submitbtn.addEventListener('click', greet);

function greet() {
    if (name1.value.length > 0 && name2.value.length > 0) {
        storeName2.innerText = `Hello, dear ${name1.value} and ${name2.value}, welcome to the game!`;
    } else {
        storeName2.innerText = "Please enter correct input"
    }  
}

// const x;
// const o;

// function whoStarts() {
//     turn = Math.floor(Math.random() * 2); // returns 0 or 1
//         if (turn == 0) {
//             // player 1 starts
//         } else {
//             // player 2 starts
//         }
// }

// function startGame() {

// }

let totalTries = 9;
let triesX = 0;
let tries0 = 0;












// console.log(getRandomInt());
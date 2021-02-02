const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const submitbtn = document.querySelector("#nameSubmit");
const storeName1 = document.querySelector("#storeName1");
const storeName2 = document.querySelector("#storeName2");
let start = document.querySelector("#start");


submitbtn.addEventListener('click', greet);

function greet() {
    if (name1.value.length > 0 && name2.value.length > 0) {
        storeName2.innerText = `Hello, dear ${name1.value} and ${name2.value}, welcome to the game!`;
    } else {
        storeName2.innerText = "Please enter correct input"
    }  
}

const whoStarts = document.querySelector("#whoStarts");

whoStarts.addEventListener('click', () => {
    let turn = Math.floor(Math.random() * 2); // returns 0 or 1
        if (turn == 0) {
            console.log("It is 0")
            showsWhoStarts.innerText = "You start, " + name1;
            // showsWhoStarts.innerText = `${name1.value} starts`
        } else {
            console.log("It is 1")
            showsWhoStarts.innerText = `${name2.value} starts`;
    }
})

let currentGamer = "X";


const fieldSquares = document.querySelectorAll('.field'); // variable stores 9 divs from the game field
console.log(fieldSquares);
fieldSquares.forEach((square, i) => {
    square.addEventListener("click", function(event) {
        if (currentGamer == "X") {
            if (event.target.innerText == "") {
                event.target.innerText = "X";
                currentGamer = "O"; 
                console.log(currentGamer);
                showsWhoStarts.innerText = `${name1.value}'s turn`;
            }
        } 
        if (currentGamer == "O") {
            if (event.target.innerText == "") {
                event.target.innerText = "O";
                currentGamer = "X";
                console.log(currentGamer);
                showsWhoStarts.innerText = `${name2.value}'s turn`;
            }
        }
    })
})

// const fieldValues = [...fieldSquares].map((square) => { // copy array
//     return square.innerText;
// })
// console.log(fieldValues);


const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");

const submitbtn = document.querySelector("#nameSubmit");
submitbtn.addEventListener('click', greet);

const storeName1 = document.querySelector("#storeName1");
const storeName2 = document.querySelector("#storeName2");
let start = document.querySelector("#start");
let winner = document.querySelector("#winner");
let draw = document.querySelector("#draw");
const whoStarts = document.querySelector("#whoStarts");



function greet() {
    if (name1.value.length > 0 && name2.value.length > 0) {
        storeName2.innerText = `Hello, dear ${name1.value} and ${name2.value}, welcome to the game!`;
    } else {
        storeName2.innerText = "Please enter correct input"
    }  
}

// randomly choosing who will start
whoStarts.addEventListener('click', () => {
    let turn = Math.floor(Math.random() * 2); // returns 0 or 1
        if (turn == 0) {
            console.log("It is 0");
            showsWhoStarts.innerText = `${name1.value} starts`;
        } else {
            console.log("It is 1");
            showsWhoStarts.innerText = `${name2.value} starts`;
    }
})

let currentGamer = "X";

const fieldSquares = document.querySelectorAll('.field'); // variable stores 9 divs from the game field
console.log(fieldSquares);

count = 9 // to check fo the draw
// adding an event listener to all 9 squares with the class field
fieldSquares.forEach((square, i) => {
    square.addEventListener("click", function(event) {

        let isWinner = checkWinner();
        if (isWinner) {
            winner.style.display = "block"; // brings the pop up window with congratulations
            return

        }

        if (currentGamer == "X") {
            if (event.target.innerText == "") { // checking if the square is empty
                event.target.innerText = "X";
                currentGamer = "O"; 
                console.log(currentGamer);
                showsWhoStarts.innerText = `${name1.value}'s turn`;
                count -= 1;
                console.log(count);
            }
        } 
        if (currentGamer == "O") {
            if (event.target.innerText == "") {
                event.target.innerText = "O";
                currentGamer = "X";
                console.log(currentGamer);
                showsWhoStarts.innerText = `${name2.value}'s turn`;
                count -= 1;
                console.log(count);
            }
        }
        checkIfDraw(); 
        checkWinner();
    })
})

// doesn't work
function checkIfDraw() {
    if (count = 0) {
        console.log("It's a draw!");
        draw.style.display = "block";
    }
}


function checkWinner() {
    const fieldValues = [...fieldSquares].map((square) => square.innerText) // copy array
        console.log(fieldValues);
        if (fieldValues[0] !== "" && fieldValues[0] === fieldValues[1] && fieldValues[0] === fieldValues[2]) {
            console.log(fieldValues[0] + " is a winner!!!!!");
        } else if (fieldValues[3] !== "" && fieldValues[3] === fieldValues[4] && fieldValues[3] === fieldValues[5]) {
            console.log(fieldValues[3] + " is a winner!!!!");
        } else if (fieldValues[6] !== "" && fieldValues[6] === fieldValues[7] && fieldValues[6] === fieldValues[8]) {
            console.log(fieldValues[6] + " is a winner!!!!");
        } else if (fieldValues[0] !== "" && fieldValues[0] === fieldValues[3] && fieldValues[0] === fieldValues[6]) {
            console.log(fieldValues[0] + " is a winner!!!!!");
        } else if (fieldValues[1] !== "" && fieldValues[1] === fieldValues[4] && fieldValues[1] === fieldValues[7]) {
            console.log(fieldValues[1] + " is a winner!!!!!");
        } else if (fieldValues[2] !== "" && fieldValues[2] === fieldValues[5] && fieldValues[2] === fieldValues[8]) {
            console.log(fieldValues[2] + " is a winner!!!!!");
        } else if (fieldValues[0] !== "" && fieldValues[0] === fieldValues[4] && fieldValues[0] === fieldValues[8]) {
            console.log(fieldValues[0] + " is a winner!!!!!");
        } else if (fieldValues[2] !== "" && fieldValues[2] === fieldValues[4] && fieldValues[2] === fieldValues[6]) {
            console.log(fieldValues[2] + " is a winner!!!!!");
        } else {
            return false;
        }
        return true;
    }
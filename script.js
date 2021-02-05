const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");

const submitbtn = document.querySelector("#nameSubmit");
submitbtn.addEventListener('click', greet);

const storeName1 = document.querySelector("#storeName1");
const storeName2 = document.querySelector("#storeName2");
// let start = document.querySelector("#start");
// let winner = document.querySelector("#winner");
// let draw = document.querySelector("#draw");
const whoStarts = document.querySelector("#whoStarts");
const restartBtn = document.querySelector("#restart-button");
restartBtn.addEventListener('click', clear);


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
let count = 9 // to check fo the draw

changeStyle = document.querySelector(".field");

const fieldSquares = document.querySelectorAll('.field'); // variable stores 9 divs from the game field
console.log(fieldSquares);


// adding an event listener to all 9 squares with the class field
fieldSquares.forEach((square, i) => {
    square.addEventListener("click", function(event) {

        if (currentGamer === "X") {
            if (event.target.innerText === "") { // checking if the square is empty
                event.target.innerText = "X";
                event.target.classList.add("xoDecoration");
                currentGamer = "O"; 
                console.log(currentGamer);
                showsWhoStarts.innerText = `${name2.value}'s turn`;
                count = count - 1;
                console.log(count);
                checkWinner();
            }
        } 
        if (currentGamer == "O") {
            if (event.target.innerText == "") {
                event.target.innerText = "O";
                event.target.classList.add("xoDecoration");
                currentGamer = "X";
                console.log(currentGamer);
                showsWhoStarts.innerText = `${name1.value}'s turn`;
                count = count - 1;
                console.log(count);
                checkWinner();
            }
        }
        checkIfDraw(); 

    })
})

=
function checkIfDraw() {
    if (count === 0) {
        console.log("It's a draw!");
        // draw.style.display = "block";
    }
}

let gameWinner = false;

function checkWinner() {
    const fieldValues = [...fieldSquares].map((square) => square.innerText) // copy array
        console.log(fieldValues);
        if (fieldValues[0] !== "" && fieldValues[0] === fieldValues[1] && fieldValues[0] === fieldValues[2]) {
            alert(fieldValues[0] + " is a winner!!!!!");
            gameWinner = true;
            congrats();
        } else if (fieldValues[3] !== "" && fieldValues[3] === fieldValues[4] && fieldValues[3] === fieldValues[5]) {
            alert(fieldValues[3] + " is a winner!!!!");
            gameWinner = true;
            congrats();
        } else if (fieldValues[6] !== "" && fieldValues[6] === fieldValues[7] && fieldValues[6] === fieldValues[8]) {
            alert(fieldValues[6] + " is a winner!!!!");
            gameWinner = true;
            congrats();
        } else if (fieldValues[0] !== "" && fieldValues[0] === fieldValues[3] && fieldValues[0] === fieldValues[6]) {
            alert(fieldValues[0] + " is a winner!!!!!");
            gameWinner = true;
            congrats();
        } else if (fieldValues[1] !== "" && fieldValues[1] === fieldValues[4] && fieldValues[1] === fieldValues[7]) {
            alert(fieldValues[1] + " is a winner!!!!!");
            gameWinner = true;
            congrats();
        } else if (fieldValues[2] !== "" && fieldValues[2] === fieldValues[5] && fieldValues[2] === fieldValues[8]) {
            alert(fieldValues[2] + " is a winner!!!!!");
            gameWinner = true;
            congrats();
        } else if (fieldValues[0] !== "" && fieldValues[0] === fieldValues[4] && fieldValues[0] === fieldValues[8]) {
            alert(fieldValues[0] + " is a winner!!!!!");
            gameWinner = true;
            congrats();
        } else if (fieldValues[2] !== "" && fieldValues[2] === fieldValues[4] && fieldValues[2] === fieldValues[6]) {
            alert(fieldValues[2] + " is a winner!!!!!");
            gameWinner = true;
            congrats();
        } else {
            return false;
        }
        return true;
    }

function replay() {
    // check who won
    // write that it's his turn
    // clear()
    // can I associate the name of the winner with x or o?
    // meaning that I could write NAME won! And use it to let him start next round
}

function clear() { // clears the field
    for (let i = 0; i < fieldSquares.length; i++) {
        fieldSquares[i].innerHTML = '';
    }
}

// how can I add the gamer here to know who won?
function congrats() {
    if (gameWinner) {
        alert("CONGRATULATIONS! YOU WON!")
    }
}

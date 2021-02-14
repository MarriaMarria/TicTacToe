
let players = {
    X:"",
    O:""
};
let gameWinner = false;

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
            players.X=name1.value;
            players.O=name2.value;
            showsWhoStarts.innerText = `${name1.value} starts`;
        } else {
            console.log("It is 1");
            players.X=name2.value;
            players.O=name1.value;
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
        if(event.target.innerText === "") {
            event.target.innerText=currentGamer;
            event.target.classList.add("xoDecoration");
            count = count - 1;
            checkWinner();
            if (!gameWinner) {
                // if (currentGamer === "X") {
                //     currentGamer = "O";
                // }else {
                //     currentGamer = "X";
                // }
                currentGamer = currentGamer === "X" ? "O":"X"; 
                showsWhoStarts.innerText = `${players[currentGamer]}'s turn`;

            }
            checkIfDraw(); 
        }
    })
    
})


function checkIfDraw() {
    if (count === 0) {
        alert("It's a draw!");
        // draw.style.display = "block";
    }
}



function checkWinner() {
    const winningCombos= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// combo = [0.1.2], [3.4.5] etc
// ex with [3.4.5] => combo[0] =3, combo[1] = 4, combo[2] = 5;
// fieldValues[3] = what is inside 3 => x or o etc
    const fieldValues = [...fieldSquares].map((square) => square.innerText) // copy array
    for (combo of winningCombos){
        if (fieldValues[combo[0]] !== "" && fieldValues[combo[0]] === fieldValues[combo[1]] && fieldValues[combo[0]] === fieldValues[combo[2]]){
            alert(players[currentGamer] + " is a winner!!!!!");
            gameWinner = true;
            congrats();
        }
    }

    }


function clear() { // clears the field
    for (let i = 0; i < fieldSquares.length; i++) {
        fieldSquares[i].innerHTML = '';
    }
    count = 9;
    gameWinner=false;
}

function congrats() {
    if (gameWinner) {
        alert("CONGRATULATIONS! YOU WON!")
    }
}

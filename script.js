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

function startGame() {
    currentGamer = "X";
}

start.addEventListener('click', startGame);
const fieldSquares = document.querySelectorAll('.field'); // variable stores 9 divs from the game field
let result = [];
fieldSquares.forEach((square,i) => {
    square.addEventListener("click", function(event) {
        console.log(currentGamer);
        if (currentGamer == "O") {
            if (event.target.innerText == "") {
                event.target.innerText = "O";
                currentGamer = "X";
                result.push(i);
                console.log(currentGamer);
                showsWhoStarts.innerText = `${name1.value}'s turn`;
            }
        } 
        
        if (currentGamer == "X" ) {
            if (event.target.innerText == "") {
                event.target.innerText = "X";
                currentGamer = "O";
                console.log(currentGamer);
                result.push(i);
                showsWhoStarts.innerText = `${name2.value}'s turn`
            }
  
        }
    console.log(result)

    })
})


const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

      // if (currentGamer == "X") {
        //     event.target.innerText = "0";
        //     currentGamer = "0";
        //     result.push(i);
        //     console.log(currentGamer)
        //     showsWhoStarts.innerText = `${name1.value}'s turn`
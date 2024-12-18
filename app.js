let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turnO = true;//playerX playerO
let count=0;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    count=0;
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box)=> {
    box.addEventListener("click",()=> {
        if(turnO===true) {
            box.innerText="O";
            turnO=false;
        }else {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        if(count == 9) {
            resetGame();
        }
        checkWinner();
    })
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled=true;
    }
};
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation Winner is  ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPattern) {
        if(boxes[pattern[0]].innerText==="X" && 
            boxes[pattern[1]].innerText==="X" && 
            boxes[pattern[2]].innerText==="X"
        ) {
            
            showWinner("X");
        }
        if(boxes[pattern[0]].innerText==="O" && 
            boxes[pattern[1]].innerText==="O" && 
            boxes[pattern[2]].innerText==="O"
        ) {
           showWinner("O");
        }
    }
};

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);


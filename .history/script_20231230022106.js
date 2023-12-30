let buttons  = document.getElementsByClassName('btn');
let reset = document.getElementById('reset-btn');
let playerType = document.getElementById('player-type')

let playerNumber = 1;
let filledGrid = [];
let filledCell = 0;

for(let i; i<6;i++){
    let arr = [-1,-1,-1,-1,-1,-1,-1];
    filledGrid.push(arr)
}

reset.addEventListener("click",function(){
    resetBoard();
});

for(let i =0; i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        let buttonNo = this.classList[1];
        makeMove(this,buttonNo.slice(4))
    })
}

function makeMove(button,buttonNo){
    let row = buttonNo % 7 === 0 ? Math.floor(buttonNo / 7)-1:Math.floor(button / 7);
    let col = button % 7 === 0 ? 6: (buttonNo % 7)-1;

    if(playerNumber === 1){
        button.classList.add("btn-player-1");

        filledGrid[row][col]=1;
        filledCell++;

        if(playerWon(row,col,1)===true){
            setTimeOut(function(){
                alert("game over : ")
            })
        }
    }
}
console.log(buttons,reset,playerType);

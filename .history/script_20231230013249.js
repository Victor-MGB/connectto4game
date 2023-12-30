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
    buttons[i].addEventListener('c')
}
console.log(buttons,reset,playerType);

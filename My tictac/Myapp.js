let parts = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let newbtn = document.querySelector('#new-btn');
let msg = document.querySelector('#msg');
let msgcon = document.querySelector('.msgcon');

let count=0;
let turn= true
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
const resetgame = () =>{
    enableBoxes();
    turn = true;
    count = 0;
    msgcon.classList.add('hide');
}


parts.forEach((part)=>{
    part.addEventListener('click', ()=>{
        if (turn){
            part.innerText = 'O'
            turn = false;
        }else{
            part.innerText = 'X'
            turn = true;
        }
        part.disabled = true;
        count++;

        let iswin = wincheck();
        if (!iswin && count===9 ){
            console.log('Game Draw',count);
            gamedraw();
        }
    })
})

const gamedraw = () => {
    msg.innerText = `Game was a Draw`;
    msgcon.classList.remove('hide');
};

const disableBoxes = () => {
    for (let box of parts) {
      box.disabled = true;
    }
  };

const enableBoxes = () =>{
    for (let box of parts){
        box.disabled = false;
        box.innerText = '';
    }
}
const wincheck = ()=>{
    for (let i of winPatterns) {
        let val1 = parts[i[0]].innerText;
        let val2 = parts[i[1]].innerText;
        let val3 = parts[i[2]].innerText;

        if(val1 !='' && val2 !='' && val3 !=''){
            if (val1 === val2 && val2 === val3){
                console.log('winner',val1);
                showWin(val1);
                
            }
        }
        
    }
}

const showWin = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcon.classList.remove('hide');
    disableBoxes();
}
newbtn.addEventListener('click',resetgame);
resetbtn.addEventListener('click',resetgame);

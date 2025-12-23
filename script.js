const cells=document.querySelectorAll(".cell");
const status=document.getElementById("status");
const turn=document.getElementById("turn");

let currentPlayer="X";
let gameActive=true;

const winPatterns=[
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

cells.forEach((cell,index)=>{
  cell.addEventListener("click",()=>{
    if(cell.textContent!=="" || !gameActive) return;

    cell.textContent=currentPlayer;

    if(checkWinner()){
      status.textContent=`🎉 Player ${currentPlayer} Wins!`;
      gameActive=false;
      showCelebration();
      return;
    }

    currentPlayer=currentPlayer==="X"?"O":"X";
    turn.textContent=`Player ${currentPlayer} Turn`;
  });
});

function checkWinner(){
  return winPatterns.some(pattern=>{
    return pattern.every(i=>{
      return cells[i].textContent===currentPlayer;
    });
  });
}

function restartGame(){
  cells.forEach(cell=>cell.textContent="");
  currentPlayer="X";
  turn.textContent="Player X Turn";
  status.textContent="";
  gameActive=true;
  document.body.classList.remove("win");
  document.getElementById("celebration").innerHTML="";
}

/* 🎈 Celebration Effect */
function showCelebration(){
function showCelebration(){
  document.body.classList.add("win");
  document.body.classList.add("shake");   // 👈 ADD THIS

  for(let i=0;i<30;i++){
    const balloon=document.createElement("div");
    balloon.className="balloon";
    balloon.style.left=Math.random()*100+"%";
    balloon.style.background=`hsl(${Math.random()*360},80%,60%)`;
    document.getElementById("celebration").appendChild(balloon);

    setTimeout(()=>balloon.remove(),4000);
  }

  setTimeout(()=>{
    document.body.classList.remove("shake");
  },400);
}

  document.body.classList.add("win");

  for(let i=0;i<30;i++){
    const balloon=document.createElement("div");
    balloon.className="balloon";
    balloon.style.left=Math.random()*100+"%";
    balloon.style.background=`hsl(${Math.random()*360},80%,60%)`;
    document.getElementById("celebration").appendChild(balloon);

    setTimeout(()=>balloon.remove(),4000);
  }
}

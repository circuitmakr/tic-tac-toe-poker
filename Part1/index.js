let position = [];
let board = []

function play(clickedId){
  const spanPlayer = document.getElementById("player")
  const clickedElement = document.getElementById(clickedId)
    position.push(clickedId);
  if(spanPlayer.innerText  === 'X'){
    clickedElement.innerText='X'
    spanPlayer.innerText = 'O'
    board[clickedId] = 'X';
  } else if(spanPlayer.innerText === 'O') {
    clickedElement.innerText='O';
    spanPlayer.innerText='X';
    board[clickedId] = 'O';
  }

const topLeft = board[0];
const topCenter = board[1];
const topRight = board[2];
const middleLeft = board[3];
const middleCenter = board[4];
const middleRight = board[5];
const bottomLeft = board[6];
const bottomCenter = board[7];
const bottomRight = board[8];


if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
  alert(`${topLeft} is the winner`);
  return;
}
if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
  alert(`${middleLeft} is the winner`);
  return;
}
if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
  alert(`${bottomLeft} is the winner`);
  return;
}
if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
  alert(`${topLeft} is the winner`);
  return;
}
if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
  alert(`${topCenter} is the winner`);
  return;
}
if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
  alert(`${topRight} is the winner`);
  return;
}
if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
  alert(`${topLeft} is the winner`);
  return;
}
if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
  alert(`${bottomLeft} is the winner`);
  return;
}

// ADOPTED LOGIC FROM DEVMOUNTAIN
let boardFull = true;
for (let i = 0; i <= 8; i++) {
  if (board[i] === undefined) {
    boardFull = false;
  }
}
if (boardFull === true) {
  alert("Cat's game, there is no winner");
}
}
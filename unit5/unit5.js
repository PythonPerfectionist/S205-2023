var turn = 0;
var isWin = false;

var board = new Array(3);
for(let i = 0; i<board.length;i++){
  board[i] = new Array(3);
}

initBoard();
printBoard();
function initBoard(){
  for(var i = 0; i<3;i++){
    for (var j = 0; j<3;j++){
      board[i][j]=0;
    }
  }
}
function printBoard(){
  document.getElementById("debug").innerHTML = "";
  for(var i = 0; i<3;i++){
    for(var j = 0; j<3; j++){
      document.getElementById("debug").innerHTML += board[i][j];
    }
    document.getElementById("debug").innerHTML += "<br>";
  }
}

function reset(){
  isWin = false;
  for(var i =0;i<9;i++){
    document.getElementById('box'+i).src = 'box.png';
  }
  initBoard();
  document.getElementById('isWin').innerHTML = "";
}

function boxClick(index){
  var row = Math.floor(index/3);
  var col = index%3;
  if(board[row][col] ==0&&!isWin){
    board[row][col]=turn+1;
    changeImage(index);
    checkWin();
    turn = 1-turn;
  }
}

function changeImage(index){
  if (turn ==0){
    document.getElementById('box'+index).src = 'cross.png';
  }else{
    document.getElementById('box'+index).src = 'circle.png';
  }
}

function checkWin(){
  for(var i = 0; i<3;i++){
    var player = board[i][0];
    if (player != 0 && player==board[i][1] && player==board[i][2]){
      isWin = true;
    }
  }
  for(var i = 0; i<3;i++){
    var player = board[0][i];
    if (player != 0 && player==board[1][i] && player==board[2][i]){
      isWin = true;
    }
  }
  var player = board[0][0];
  if (player !=0 && player==board[1][1]&&player == board[2][2]){
    isWin = true;
  }
  var player = board[0][2];
  if (player !=0 && player==board[1][1]&&player == board[2][0]){
    isWin = true;
  }
  if (isWin){
    if(turn==0){
      document.getElementById('isWin').innerHTML = "Cross wins";
    }
    else{
      document.getElementById('isWin').innerHTML = "Circle wins";
    }
  }

}

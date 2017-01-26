var gameMode = 'one_player';
var board = 
            [null, null, null,
             null, null, null,
             null, null, null];
var winner;
var player1 = "taco";
var player2 = "burrito";
var computer = "burrito";
// taco === true
var turn = true;



function isEmpty(board, position){
  if (board[position] === null){
    return true;
  }
  return false;
}


function computerMove(){
  var computerMove = getComputerMove();
    updateBoard(board, computerMove, computer);
    turn = !turn;
    
    // check if computer won
    if(winCheck(board)){
      return endScreen();
    }
    if (tieCheck(board)){
      return endScreen();
    }
}

function reset(){
  var player1 = "taco";
  var player2 = "burrito";
  var computer = "burrito";
  
  // taco === true
  var turn = true;
  
  board = 
            [null, null, null,
             null, null, null,
             null, null, null];
  
  $('.squares').removeClass('burrito animated pulse disabled taco burrito');
  $('.status-text').html('<img src="https://cdn.gomix.com/e9221aec-66d0-420b-9c00-3acd92a92731%2F1f32e%20(2).svg" alt="TicTaco Logo" class = "status-turn"> <span class = "turn">&#39;s Turn</span>');
  $('.victory').css('display','none');
}

function winCheck(board){
  // check if someone has won
  var check1 = threeCheck(board[0],board[1],board[2]);  // check for 3-in-a-row horizontally
  var check2 = threeCheck(board[3],board[4],board[5]); 
  var check3 = threeCheck(board[6],board[7],board[8]); 
  var check4 = threeCheck(board[0],board[3],board[6]);  // check for 3-in-a-row vertically
  var check5 =  threeCheck(board[1],board[4],board[7]); 
  var check6 = threeCheck(board[2],board[5],board[8]); 
  var check7 = threeCheck(board[0],board[4],board[8]);  // check for 3-in-a-row diagonally
  var check8 = threeCheck(board[6],board[4],board[2]);
  
  if (check1 || check2 || check3 || check4 || check4 || check5 || check6 || check7 || check8){
    return true;
  }
  
}



function threeCheck(p1,p2,p3){
  // check three positions
  if (p1 === null)
    return false;
  if (p1 !== p2)
    return false;
  if (p1 !== p3)
    return false;
  winner = p1;
  return true;
}


function tieCheck(board){
  // check if there's a tie
  var count = 0;
  for (var x = 0; x < 9; x++){
    if (board[x] !== null){
      count++;
    }
  }
  if (count === 9){
    winner = "Nobody";
    return true;
  }
  else{
    return false;
  }
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


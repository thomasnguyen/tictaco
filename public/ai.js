function getComputerMove(){
  // check to see if computer can win
  var copy;
  for (var z = 0; z < 9; z++){
    copy = dupeBoard();
    if (isEmpty(copy, z)){
      copy[z] = computer;
      if(winCheck(copy)){
        return z;
      }
    }
  }
  
  // check to see if player will win
  for (var h = 0; h < 9; h++){
    copy = dupeBoard();
    if (isEmpty(board, h)){
      
      copy[h] = player1;
      if (winCheck(copy)){
        return h;
      }
    }
  }
  
    // check center 
  copy = dupeBoard();
  if (isEmpty(copy, 4)){
    return 4;
  }
  
  // check corners
  var corners = [0,2,6,8];
  corners = shuffle(corners);
  for (var b = 0; b < 4; b++){
    copy = dupeBoard();
    if (isEmpty(copy, corners[b])){
      return corners[b];
    }
  }
  
  // check other spots
  var otherSpots = [1,3,5,7];
  otherSpots = shuffle(otherSpots);
  for (var c = 0; c < 4; c++){
    copy = dupeBoard();
    if (isEmpty(copy, corners[c])){
      return corners[c];
    }
  }
  
}

function dupeBoard(){
  // create a new virtual board
  var dupeBoard = [];
  for (var a = 0; a < 9; a++){
    dupeBoard.push(board[a]);
  }
  
  return dupeBoard;
}

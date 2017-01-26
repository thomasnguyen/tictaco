function endScreen(){
  $('.squares').addClass('disabled').attr('disabled',true);

    if(winner === 'burrito'){
        $('.board')
        .prepend('<div class = "victory"><div class = "victory-text">Brrrrritos wins!</div><img src="https://cdn.gomix.com/e9221aec-66d0-420b-9c00-3acd92a92731%2F1f32f.svg" class = "splash-logo animated tada infinite"></div>');
    }
    else if(winner === 'taco'){
        $('.board').prepend('<div class = "victory"><div class = "victory-text">Taco about this win!</div><img src="https://cdn.gomix.com/e9221aec-66d0-420b-9c00-3acd92a92731%2F1f32e%20(2).svg"  class = "splash-logo animated tada infinite"></div>');
    }
    else if (winner === "Nobody"){
      $('.board').prepend('<div class = "victory"><div class = "victory-text">Cats Game!(TIE)</div><img src="https://cdn.gomix.com/e9221aec-66d0-420b-9c00-3acd92a92731%2F1f408.svg" class = "splash-logo animated tada infinite"></div>');
    }
  
  $('.status-text').html('<span class = "playAgain victory-image"  onclick = "reset()">Play Again!</span>');
}


function updateBoard(board, position){
  var positionTurn;
  if (turn)
    positionTurn = player1;
  else
    positionTurn = player2;
  board[position] = positionTurn;
  var squarePosition = "#" + position;
  
  if (!turn) {
    $(squarePosition).addClass('burrito animated pulse');
    $('.status-text').html('<img src="https://cdn.gomix.com/e9221aec-66d0-420b-9c00-3acd92a92731%2F1f32e%20(2).svg" class = "status-turn"> <span class = "turn">&#39;s Turn</span>');

  }
  else {
    $(squarePosition).addClass('taco animated pulse');
    $('.status-text').html('<img src="https://cdn.gomix.com/e9221aec-66d0-420b-9c00-3acd92a92731%2F1f32f.svg"  class = "status-turn"> <span class = "turn">&#39;s Turn</span>');
  }
}

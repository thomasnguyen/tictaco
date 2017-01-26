$('.options').on('click', function(){
  $('.options').removeClass('selected');
  $(this).addClass('selected');
  $('.start').prop("disabled",false);
  
  var selection = $(this).attr('id');
  
  if (selection === 'one_player'){
    gameMode = 'one_player';
    $('.mode').text('Spicy.ai');
  }
  else {
    gameMode = 'two_player';
    $('.mode').text('Two Players');
  }
});

$('.start').on('click',function(){
  $('.splash').toggle();
  reset();
});

$('.back').on('click',function(){
  $('.splash').toggle();
  $('.victory').css('display','none');
  reset();
});


$('.squares').on('click', function(){
  var position = parseInt($(this).attr('id'));

  if( !isEmpty(board, position) ){
    return;
  }
  
  // update board
  updateBoard(board, position, player1);
  turn = !turn;
  
  // victory conditions
  if(winCheck(board)){
    return endScreen();
  }
  if (tieCheck(board)){

    return endScreen();
  }
  
  if (gameMode == 'one_player'){
    // ai alogirthm
    setTimeout(computerMove,250);
  }
});
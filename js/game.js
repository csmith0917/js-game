$(function(){
	// start game
	function slowFade (element) {
		$(element).delay(300).fadeIn("slow");
	}

	$('#yes-button').click(function() {
	  $('.intro').fadeOut(300);
	  slowFade('#get-player-name');
	});
	$('#no-button').click(function() {
	  $('.wrapper').fadeOut(300);
	  slowFade('#refusal');
	});

	$('#player-name #submit').click(function() {
	  var name = $("#userName").val();
	  if (!$("#userName").val()) {
	  	name = "Traveler";
	  };
	  $('#get-player-name').fadeOut( 300 );
	  $('#welcome-player span').text(name);
	  slowFade('#welcome-player');
	  $('.game-rules').delay(800).fadeIn("slow");
	  $('.start-game').delay(2200).fadeIn("slow");
	});

	$('.start-game #ready').click(function() {
	  $('.story-block').html(alley);
	});

	// in the alley
	var option1Choice = Math.random();
	var option2Choice = Math.random();
	$(document).on('click','#alley-encounter .options .choice1',function(){
		if (option1Choice <= .5) {
			$('.story-block').html(alleyTurnAroundLive);
		} else {
			$('.story-block').html(alleyTurnAroundDie);
		}
	});
	$(document).on('click','#alley-encounter .options .choice2',function(){
		if (option1Choice <= .5) {
			$('.story-block').html(alleyWalkFasterLive);
		} else {
			$('.story-block').html(alleyWalkFasterDie);
		}
	});
});














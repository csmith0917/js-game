$(function(){
	function slowFade (element) {
		$(element).delay(300).fadeIn("slow");
	}

	$('#yes-button').click(function() {
	  $('.intro').fadeOut(300);
	  slowFade('#get-player-name');
	});
	$('#no-button').click(function() {
	  $('.wrapper').fadeOut(300);
	  slowFade('.refusal');
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
});














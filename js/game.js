$(function(){

	$('#yes-button').click(function() {
	  $('.intro').fadeOut(300);
	  $('#get-player-name').delay(300).fadeIn("slow");
	});
	$('#no-button').click(function() {
	  $('.wrapper').fadeOut(300);
	  $('.refusal').delay(300).fadeIn("slow");
	});

	$('#player-name #submit').click(function() {
	  var name = $("#userName").val();
	  if (!$("#userName").val()) {
	  	name = "Traveler";
	  };
	  $('#get-player-name').fadeOut( 300 );
	  $('#welcome-player span').text(name);
	  $('#welcome-player').delay(300).fadeIn("slow");
	  $('.game-rules').delay(800).fadeIn("slow");
	  $('.start-game').delay(2200).fadeIn("slow");
	});

	$('.start-game #ready').click(function() {
	  
	});
});
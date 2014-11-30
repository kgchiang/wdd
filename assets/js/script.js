$(document).ready(function() {

	$("#content-wrapper").css("-webkit-transform", "translateY(0px)");
	$("#content-wrapper").css("-moz-transform", "translateY(0px)");
	$("#content-wrapper").css("transform", "translateY(0px)");
	$("#content-wrapper").css("-webkit-transition", "0.5s");
	$("#content-wrapper").css("-moz-transition", "0.5s");
	$("#content-wrapper").css("transition", "0.5s");

	$("#arm img").hover(function() {
		$("#arm img").addClass('move');
		setTimeout(function() {
			$("#arm img").removeClass('move');
		}, 50);
	});

});
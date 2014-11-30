$(document).ready(function() {

	$("#content-wrapper-prod").css("-webkit-transform", "translateY(0px)");
	$("#content-wrapper-prod").css("-moz-transform", "translateY(0px)");
	$("#content-wrapper-prod").css("transform", "translateY(0px)");
	$("#content-wrapper-prod").css("-webkit-transition", "0.5s");
	$("#content-wrapper-prod").css("-moz-transition", "0.5s");
	$("#content-wrapper-prod").css("transition", "0.5s");

	$(".faq-wrapper").click(function() {
		var wrap = "#" + $(this).attr('id');
		var id ="#" + $(this).children().first().attr('id');
		var nid = id + "-descp";
		var selector = nid + " " + ".active-faq";
		if ($(selector).hasClass("faq-active")) {
			$(wrap).removeClass("flip-wrap")
			setTimeout(function() {
				$(selector).removeClass("faq-active");
			}, 0)
			setTimeout(function(){
				$(id).removeClass("hide-q");
			}, 150);
		} else {
			$(wrap).addClass("flip-wrap")
			$(id).addClass("hide-q");
			setTimeout(function(){
				$(selector).addClass("faq-active");
			}, 150);
		}
	});

});
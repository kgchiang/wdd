$(document).ready(function() {

	$("#content-wrapper-prod").css("-webkit-transform", "translateY(0px)");
	$("#content-wrapper-prod").css("-moz-transform", "translateY(0px)");
	$("#content-wrapper-prod").css("transform", "translateY(0px)");
	$("#content-wrapper-prod").css("-webkit-transition", "0.5s");
	$("#content-wrapper-prod").css("-moz-transition", "0.5s");
	$("#content-wrapper-prod").css("transition", "0.5s");

	$(".product").hover(function() {
		var id = $(this).attr('id');
		console.log(id);
		var selector = "#" + id + " " + ".active-prod";
		console.log(selector);
		$(selector).show();
		setTimeout(function() {
			$(selector).addClass("prod-active");
		}, 200)
	}, function() {
		var id = $(this).attr('id');
		var selector = "#" + id + " " + ".active-prod";
		$(selector).removeClass("prod-active");
		setTimeout(function() {
			$(selector).hide();
		}, 200)
	});

});
$(document).ready(function() {

	$("#content-wrapper-prod").css("-webkit-transform", "translateY(0px)");
	$("#content-wrapper-prod").css("-moz-transform", "translateY(0px)");
	$("#content-wrapper-prod").css("transform", "translateY(0px)");
	$("#content-wrapper-prod").css("-webkit-transition", "0.5s");
	$("#content-wrapper-prod").css("-moz-transition", "0.5s");
	$("#content-wrapper-prod").css("transition", "0.5s");

	var page = $(document).find("title").text();
	$("#message").text("The " + page + " page has yet to be unpacked!");

});
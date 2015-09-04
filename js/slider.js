// JavaScript Document
$(document).ready(function(e) {
	$("#leftArrow").on("click", function(){
		var first = $(this).parent().siblings().find(".staffimg:first");
		var next = $(this).parent().siblings().find(".staffimg:nth-child(2)");
		
		first.removeClass("activeImg").appendTo(".img-wrapper");
		next.addClass("activeImg");
	
		var first = $(this).parent().siblings().find(".sliderDetail:first");
		var next = $(this).parent().siblings().find(".sliderDetail:nth-child(2)");
		
		first.removeClass("activeTxt").appendTo(".text-inner");
		next.addClass("activeTxt");
	});
	
	$("#rightArrow").on("click", function(){
		var first = $(this).parent().siblings().find(".staffimg:first");
		var last = $(this).parent().siblings().find(".staffimg:last").prependTo(".img-wrapper");
		
		first.removeClass("activeImg").insertBefore(".staffimg:nth-child(3)");
		last.insertBefore(".staffimg:nth-child(2)").addClass("activeImg");	
		
		var first = $(this).parent().siblings().find(".sliderDetail:first");
		var last = $(this).parent().siblings().find(".sliderDetail:last").prependTo(".text-inner");
		
		first.removeClass("activeTxt").insertBefore(".sliderDetail:nth-child(3)");
		last.insertBefore(".sliderDetail:nth-child(2)").addClass("activeTxt");
	});
});
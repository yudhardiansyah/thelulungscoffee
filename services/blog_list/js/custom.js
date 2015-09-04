// JavaScript Document
$(document).ready(function(e) {
  

		$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {

				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				  var target = $(this.hash);
				  
				  if($('.navbar-collapse.collapse').hasClass("in")){
					$('.navbar-collapse.collapse').removeClass('in');
				  }
				  
				  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  if (target.length) {
					
					$('html,body').animate({
					  scrollTop: target.offset().top
					}, 800);
					return false;
				  }
				}
			});
		});
		
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 100) {
			
		   if ($(window).width() > 750) {  
				$("#sticky").css('background','#000000');
				$("#sticky").css("margin-top",'0');
				$(".navbar-brand").css('top','-14px');
				$('.navbar-brand img').css('height','61px');
				$('#ctnf_01').css('background-color','#000000');
		   }  
		}
		
		else {
		   if ($(window).width() > 750) {  
				$("#sticky").css("background",'transparent');
				$("#sticky").css("margin-top",'70px');
				$(".navbar-brand").css('top','-80px');
				$('.navbar-brand img').css('height','auto');
				$('#ctnf_01').css('background-color','transparent');
		   }  

			
			
		}
	});	
	
	/*
	$(window).resize(function(){
	
		   if ($(window).width() <= 320) {  
		   }  
		   
		   if ($(window).width() >= 801) {  
		   }  
	
	});*/
				

});
(function($) {


	$(document).ready(function(){

		$(".fade a img").hover(function(){
			$(this).fadeTo("fast", 0.7); 
		},function(){
			$(this).fadeTo("fast", 1.0); 
		});

	});


	$(function(){

		$('a[href^=#]').click(function() {
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;

		$($.browser.safari ? 'body' : 'html').animate({scrollTop:position}, speed, 'swing');
			return false;
		});
	});


})(jQuery);
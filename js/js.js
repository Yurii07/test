$('a[href^="#"]').click(function(){
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top}, 800);
	return false;
});

jQuery(document).ready(function($){
});
if ($(window).width() < 560 ) { 
	$('header menu .container').prepend('<div id="menu-icon">Menu</div>');
	$("#menu-icon").on("click", function(){
	$("#openbox").slideToggle();
	});
};

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 10) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});

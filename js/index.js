// PHOTO CAROUSEL
$(document).ready(function(){
	$('.photos').slick({
		accessibility: true,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: true,
		centerMode: true,
		centerPadding: '10px',
		focusOnSelect: true,
		initialSlide: 0,
		pauseOnHover: false,
		slidesToShow: 1,
		speed: 1000,
		swipeToSlide: true,
		variableWidth: true,
	});
});

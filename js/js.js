$(document).ready(function(){
	$('.photos').slick({
		accessibility: true,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: true,
		centerMode: true,
		centerPadding: '10px',
		focusOnSelect: true,
		slidesToShow: 3,
		speed: 1000,
		swipeToSlide: true,
		variableWidth: true,
	});
});
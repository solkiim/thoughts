$(document).ready(function(){
	$('.photos').slick({
		accessibility: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		centerMode: true,
		centerPadding: '0px',
		focusOnSelect: true,
		slidesToShow: 3,
		swipeToSlide: true,
		variableWidth: true,
	});
});
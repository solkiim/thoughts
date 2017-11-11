// SHOW CAROUSEL AFTER ALL IMGS LOADED
$('.photos').imagesLoaded().done( function() {
//	$('#placeholder').hide();
//	$('.photos').show(300);
//	$('.photos').slick('slickPlay');
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

//// PHOTO CAROUSEL
//$(document).ready(function(){
//	$('.photos').slick({
//		accessibility: true,
//		autoplay: false,
////		autoplaySpeed: 2500,
//		arrows: true,
//		centerMode: true,
//		centerPadding: '10px',
//		focusOnSelect: true,
//		initialSlide: 0,
//		pauseOnHover: false,
//		slidesToShow: 1,
//		speed: 1000,
//		swipeToSlide: true,
//		variableWidth: true,
//	});
//});

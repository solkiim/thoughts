// PHOTO CAROUSEL
$(window).on("load", function() {
	$('.index-photos').slick({
		accessibility: true,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: true,
		centerMode: true,
		centerPadding: '10px',
		focusOnSelect: true,
		initialSlide: 0,
		lazyLoad: 'progressive',
		pauseOnHover: false,
		slidesToShow: 1,
		speed: 1000,
		swipeToSlide: true,
		variableWidth: true,
	});
});
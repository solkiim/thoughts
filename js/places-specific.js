// MASONRY GRID
var $grid = $('.grid').masonry({
	itemSelector: '.grid-item',
	columnWidth: 300,
	fitWidth: true,
	gutter: 10,
});
$grid.imagesLoaded().progress( function() {
	$grid.masonry('layout');
});


// MAGNIFIC POPUP
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeOnBgClick: true,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 150,
			opener: function(element) {
				return element.find('img');
			}
		}
	});
});


// SCROLL TO TOP
window.onscroll = function() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $("#scroll-to-top").show(300);
    } else {
        $("#scroll-to-top").hide(300);
    }
};
function scrollToTop() {
    $('html, body').animate({ scrollTop: 0 }, 600);
}
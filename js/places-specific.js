// masonry grid
var $grid = $('.grid').masonry({
	itemSelector: '.grid-item',
	columnWidth: 300,
	fitWidth: true,
	gutter: 10,
});
$grid.imagesLoaded().progress( function() {
	$grid.masonry('layout');
});


// magnific popup
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
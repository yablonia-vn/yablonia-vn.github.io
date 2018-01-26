jQuery(window).on("load", function() {
	"use strict";

	/* -----------------------------------------
	 FlexSlider Init
	 ----------------------------------------- */
	jQuery(".flexslider").flexslider({
		controlNav: false,
		prevText: '',
		nextText: ''
	});

	/* -----------------------------------------
	 Scroll To Fixed
	 ----------------------------------------- */

	if ( jQuery(window).width() > 991 ) {
		var entry = jQuery(".entry:not(.fullwidth-flex)"),
			wrap = jQuery('.single .entry-info-wrap');

		if ( entry.length ) {
			wrap.scrollToFixed({
				marginTop: 30,
				limit: function() {
					if ( jQuery('#comments').length ) {
						return jQuery("#comments").offset().top - wrap.outerHeight(true)
					} else if ( jQuery('.related').length ) {
						return jQuery(".related").offset().top - wrap.outerHeight(true) - 70
					}
				},
				removeOffsets: true
			});
		}
	}

});

jQuery(document).ready(function($) {
	"use strict";

	/* -----------------------------------------
	 Main Navigation Init
	 ----------------------------------------- */
	$('ul#navigation').superfish({
		delay:       500,
		animation:   { opacity:'show'},
		speed:       'fast',
		dropShadows: false
	});

	/* -----------------------------------------
	  Mobile sidebar behaviour
	 ----------------------------------------- */
	var mobileTrigger = $(".mobile-trigger"),
			headWrap = $(".head-wrap");

	mobileTrigger.on('click', function(e) {
		if ( !headWrap.hasClass('open') ) {
			headWrap.slideDown().addClass('open');
		} else {
			headWrap.slideUp().removeClass('open');
		}
		e.preventDefault();
	});

	/* -----------------------------------------
	 Responsive videos (fitVids.js)
	 ----------------------------------------- */
	$(".video-hold").fitVids();

	/* -----------------------------------------
	 Infinite Scrolling
	 ----------------------------------------- */
	var itemWrapper = $('.row.joined.infinite');
	itemWrapper.infinitescroll({
		loading: {
			img: "",
			msgText: scriptsText.msgText,
			finishedMsg: scriptsText.finishedMsg
		},
		nextSelector: ".load-more > a",
		itemSelector: '.item',
		navSelector: '.load-more',
		contentSelector: '.row.joined.infinite',
		behavior: 'twitter'
	}, function(newElements) {
		var $newElements = jQuery(newElements);
		//left in case we need a callback
	});

});
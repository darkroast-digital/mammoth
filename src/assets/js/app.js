// =========================================
//
// Imports
//
// =========================================

import $ from 'jquery';

import jQuery from 'jquery';

// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

// *********************************************************************
// *********************************************************************
// *********************************************************************
// *********************************************************************

//FORM =======================================

$(function() {

	// Get the form
	var form = $('#form');
	
	// Get the messages
	var formMessages = $('.form-messages');
	
	// Set up an event listener for the contact form
	$(form).submit(function(e) {
		// Stop the browser from submitting the form
		e.preventDefault();
		
		// Serialize the form data
		var formData = $(form).serialize();
		
		// Submit form with AJAX
		$.ajax({
			type: 'Post',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');
			
			// Set the message test
			$(formMessages).text(response);
			
			// Clear the form
			$('#form input').val('');
			$('#form textarea').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
			
			// Set the message text
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Ooops! An error occured and your message could not be sent.');
			}
			
		})
		
	});
	
});

//var map;
//
//function initMap() {
//	map = new google.maps.Map(document.getElementById('map'), {
//		center: {
//			lat: -42.264027,
//			lng: -82.462430
//		},
//		zoom: 8
//	});
//}

// ======================================================================
//
// Parallax
//
// ======================================================================

var mq = window.matchMedia( "(min-width: 768px)" );

if (mq.matches) {

// makes the parallax elements
function parallaxIt() {

	// create variables
	var $fwindow = $(window);
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	// on window scroll event
	$fwindow.on('scroll resize', function () {
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	});

	// for each of content parallax element
	$('[data-type="content"]').each(function (index, e) {
		var $contentObj = $(this);
		var fgOffset = parseInt($contentObj.offset().top);
		var yPos;
		var speed = ($contentObj.data('speed') || 1);

		$fwindow.on('scroll resize', function () {
			yPos = fgOffset - scrollTop / speed;

			$contentObj.css('top', yPos);
		});
	});

	// for each of background parallax element
	$('[data-type="background"]').each(function () {
		var $backgroundObj = $(this);
		var bgOffset = parseInt($backgroundObj.offset().top);
		var yPos;
		var coords;
		var speed = ($backgroundObj.data('speed') || 0);

		$fwindow.on('scroll resize', function () {
			yPos = -((scrollTop - bgOffset) / speed);
			coords = '50% ' + yPos + 'px';

			$backgroundObj.css({
				backgroundPosition: coords
			});
		});
	});

	// triggers winodw scroll for refresh
	$fwindow.trigger('scroll');
};

parallaxIt();

} else {

}

//
//
// Sticky Nav
//
//

var stickyNav = $('.nav').offset().top;
var navHeight = $('.nav').outerHeight();

$(window).scroll(function () {
	if ($(window).scrollTop() > stickyNav) {
		$('.nav').addClass('is--sticky');
		$('.intro').css('padding-top', navHeight);
	} else {
		$('.nav').removeClass('is--sticky');
		$('.intro').css('padding-top', 0);
	}
});

//
//
//
//
//

var map = new GMaps({
	el: '#map',
	scrollwheel: false,
	lat: 42.264027,
	lng: -82.462430
});

map.addMarker({
	lat: 42.264027,
	lng: -82.462430,
	title: 'Mammoth Truck Wash'
}); 

//
//
//
//
//

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//
//
//
//
//

$(function() {
	var menu = $('.menu');
	var trigger = $('.menu__trigger');
	
	trigger.on('click', function() {
		$(this).toggleClass('is--open');
		menu.toggleClass('is--open');
	});
});

// ======================================================================
//
// Modal
//
// ======================================================================

$(function () {

	$('.modal__trigger').click(function (e) {
		e.preventDefault();

		var activeModal = $(this).attr('href');
		$('#' + activeModal).addClass('is--open');
		$('.overlay').addClass('is--open');
	});

	$('.modal__close, .overlay').click(function () {
		var modal = $('.modal.is--open');

		modal.removeClass('is--open');
		$('.overlay').removeClass('is--open');
	});

});

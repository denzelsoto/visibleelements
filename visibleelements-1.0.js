/**
 * jQuery Visible ELements Plugin
 *
 * By: Denzel Van Soto
 * (c) http://denzelsoto.com/
 *
 * MIT licensed
 *	
 * Copright 2018 Denzel Soto
 * V 1.0
 */
(function($) {

	var countIsOnScreen	= []; // prevents the call back to trigger twice

	/* ===== Declares the plugin function ===== */
	$.fn.visibleElements = function( options ) {

		/* Declares the options and variables in the plugin */
		var set			= $.extend({

		    offsetTop		: null, 		// Add offset from the top of the element
		    offsetBottom	: null, 		// Add offset from the bottom of the element
		    customClass		: 'onScreen', 		// Allows use of custom class
		    removeAfter  	: false, 		// Removes the class when the elements leaves the screen upwards
		    runOnce  		: false, 		// If set to true, the plugin will only run once
		    isOnScreen		: function() {} 	// Call a function when element is on screen

		}, options),
        	win 		= $(window),
		selector 	= $(this),
		x 		= 0;

		/* Applies the condition to each elements */
		selector.each(function(){
			
			/* Prevent script from running more than once if runOnce is set to true */
			if( (set.runOnce == true && !($(this).hasClass(set.customClass))) || set.runOnce == false ){
				/* count callback each element */
				x++;
				countIsOnScreen.push(x);
				/* Calls the main function */
				checkElments($(this), win, set, x);
			}

		});

	}

	/* ===== Declares the main function ===== */
	function checkElments( selectorEl, win, set, x ) {

		/* Declares the functions variable for each elements */
		var elTop		= selectorEl.offset().top,
		elHeight		= selectorEl.innerHeight(),
		elOffsetTop		= elTop,
		elOffsetBottom		= elTop + elHeight;

		/* Checks the current position of the window */
		winT = win.scrollTop();
		winB = winT + win.height();

		/* Applies the offset if used */
		if( set.offsetTop !== null ){		elOffsetTop		= elTop - (set.offsetTop);					}
		if( set.offsetBottom !== null ){	elOffsetBottom 	= elTop + elHeight + (set.offsetBottom);	}

		/* ===== The logic of the plugin ===== */
		if( winT <= elOffsetBottom && winB >= elOffsetTop ){

			/* Adds the class when the elements is currently visible on the window */
			selectorEl.addClass(set.customClass);
			// Calls the function if used
			if( countIsOnScreen[x] == 0 ){
				set.isOnScreen.call(this); countIsOnScreen[x]++;
			}

		}else if( winT > elOffsetBottom ){

			/* Removes the class if removeAfter is enabled */
			if( set.removeAfter != false ){
				selectorEl.removeClass(set.customClass);
			}
			// Reset callback
			countIsOnScreen[x] = 0;

		}else if( winB < elOffsetTop){

			/* Removes the class if the element is still below the screen */
			selectorEl.removeClass(set.customClass);
			// Reset callback
			countIsOnScreen[x] = 0;

		}

	}

}(jQuery));

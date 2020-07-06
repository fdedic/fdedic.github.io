jQuery(document).ready(function() {
				var offset = 100;
				var duration = 750;
				jQuery(window).scroll(function() {

				});

				jQuery('.scroll-top').click(function(event) {
					event.preventDefault();
					jQuery('html, body').animate({scrollTop: 0}, duration);
					return false;
				})
			});

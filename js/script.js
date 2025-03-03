// Header menu js //
$(document).ready(function() {
    $(function($) {
      let url = window.location.href;
      $('.header_sec .navbar .navbar-nav > li > a').each(function() {
        if (this.href === url) {
          $(this).closest('li').addClass('active');
        }
      });
    });
});

$('.header_sec .navbar .dropdown > .dropdown-toggle').click(function () {
    window.location = $(this).attr('href');
});

// Sticky-Header js //
$(window).scroll(function(){
    if ($(this).scrollTop() > 80) {
       $('.header_sec').addClass('header_sticky');
    } else {
       $('.header_sec').removeClass('header_sticky');
    }
});

//service Slider
$(document).ready(function() {
	var owl = $('.owl-carousel');
	$('.logoSlider').owlCarousel({
		loop:true,
		autoplay:true,
		margin:15,
		nav:true,
		dots:false,
		responsive:{

			0:{

				items:1
			},
			768:{

				items:2
			},
			1024:{

				items:2,
        margin:30
			}
		}
	});
	
});

//testimonial Slider
$(document).ready(function() {
	var owl = $('.owl-carousel');
	$('.logoSlider2').owlCarousel({
		loop:true,
		autoplay:true,
		margin:15,
		nav:true,
		dots:false,
		responsive:{

			0:{

				items:1
			},
			768:{

				items:1
			},
			1024:{

				items:1,
        margin:30
			}
		}
	});
	
});
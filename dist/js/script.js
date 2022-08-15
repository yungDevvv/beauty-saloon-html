function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});


//FIX BAG THEN SITE IS LOADING 
//document.querySelector('#my-page').style.display = 'none';

       /* BURBER MENU */
 // Burger menu animation
	
 // Burger menu opening
	

	$(window).on('load', function() {
		
		$(function() {
			$('#my-menu').mmenu({
				extensions: ['widesreen','theme-black','effect-menu-slide', 'pagedim-black'],
				navbar: {
					title: '<img width="110px" height="auto" src="img/header/logo.png" alt="Салон красоты Лого">'
				},
				offCanvas: {
					position: 'right'
				}
			});
			var api = $('#my-menu').data('mmenu');
			api.bind('opened', function() {
				$('.hamburger').addClass('is-active');
			}).bind('closed', function() {
				$('.hamburger').removeClass('is-active');
			});
	
			$(window).scroll(function() {
				if ($(this).scrollTop() > $(this).height()) {
					$('.top').addClass('active');
				}
				else {
					$('.top').removeClass('active');
				}
			})
			$('.top').click(function() {
				$('html, body').stop().animate({scrollTop: 0},'slow','swing');
			})
		});
	})
	
// click effect on header button 
const headerButton = document.querySelector('#header_btn');
headerButton.onmouseout = function() {
	this.style.backgroundColor = '#f9c766';
}
headerButton.onmousemove = function() {
	this.style.backgroundColor = '#ffd37b';
}
headerButton.onmousedown = function() {
	this.style.backgroundColor = '#f5b432';
}
headerButton.onmouseup = function() {
	this.style.backgroundColor = '#f9c766';
}

new Swiper('.service-slider', {

	slidesPerView: 3,
	speed: 700,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	 },
	 autoplay: {
		delay: 4000,
	 },
	 breakpoints: {
		1300: {
		  slidesPerView: 3,
		},
		800: {
			slidesPerView: 2,
		 },
		 319: {
			slidesPerView: 1,
		 },
	 },
});

new Swiper('.partners-slider', {
	
	slidesPerView: 4,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	 },
	  autoplay: {
	 	 delay: 3000,
		 disableOnInteraction: false,
	},
	 breakpoints: {
		320: {
			slidesPerView: 1,
		},
		551: {
			slidesPerView: 2,
		},

		830: {
		  slidesPerView: 3,
		},

		1200: {
		  slidesPerView: 3,
		}
	 }
	
});
new Swiper('.review-slider', {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	 },
	// thumbs: {
	// 	swiper: {
	// 		el:'.image-mini-slider',
	// 		slidesPerView: 5,
	// 	}
	// },
});
// LKP7DV5M
// modificed select 

$('select').selectize({
	create: true,
});










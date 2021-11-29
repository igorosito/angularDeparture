$(document).ready(function() {
	
	let imgItems = $('.slider li').length;
	let imgPos = 1;
	
	for (let i = 0; i < imgItems; i++) {
		$('.pagination').append('<li><i class="fa fa-circle"></i></li>');	
	}	
	
	$('.slider li').hide();
	$('.slider li:first').show();
	
	$('.pagination li:first').css({
		'color': '#C3374F'
	});
	
	$('.pagination li').on('click', pagination);
	$('.right i').on('click', nextSlider);
	$('.left i').on('click', prevSlider);
	
	
	function pagination() {
		let paginationPos = $(this).index() + 1;
		$('.slider li').hide();
		$(`.slider li:nth-child(${paginationPos})`).fadeIn(1000);
		$('.pagination li').css({
			'color': '#cfcfcf'
		})
		$(this).css({
			'color': '#C3374F'
		});
		imgPos = paginationPos;
	}
	
	function nextSlider() {
		imgPos >= imgItems ? imgPos = 1 : imgPos++;
		$('.pagination li').css({
			'color': '#cfcfcf'
		});
		$(`.pagination li:nth-child(${imgPos})`).css({
			'color': '#C3374F'
		});
		$('.slider li').hide();
		$(`.slider li:nth-child(${imgPos})`).fadeIn();
	}
	
	function prevSlider() {
		imgPos <= 1 ? imgPos = imgItems : imgPos--;
		$('.pagination li').css({
			'color': '#cfcfcf'
		});
		$(`.pagination li:nth-child(${imgPos})`).css({
			'color': '#C3374F'
		});
		$('.slider li').hide();
		$(`.slider li:nth-child(${imgPos})`).fadeIn(1000);
	}

	$(document).on('keydown', function(e) {
		e.keyCode == 37 ? $('.left i').trigger('click') : '';
		e.keyCode == 39 ? $('.right i').trigger('click') : '';
	});
	
});
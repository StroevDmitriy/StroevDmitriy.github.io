window.onload = function() {
	document.getElementById('burger-menu').addEventListener('click', function() {
		this.classList.toggle("active");
		console.log(this);
		document.getElementsByClassName('menu')[0].classList.toggle("active");
	})

}

$(window).scroll(function() {
	$('h2').each(function() {
		var headerPos = $(this).offset().top;
		var bottomOfWindow = $(window).scrollTop() + $(window).height();
		if (headerPos < bottomOfWindow-150) {
			$(this).removeClass('trp');
			$(this).addClass('fadeInLeft');
		}
	})
});
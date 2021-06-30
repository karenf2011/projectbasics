$(function() {
	$(document).scroll(function() {
		let $nav = $('#headNav');
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

const maya = document.querySelectorAll('.maya');
for (const m of maya) {
	m.style.filter = 'sepia(100%)';
}

for (const m of maya) {
	m.addEventListener('mouseover', function() {
		m.style.filter = 'sepia(0)';
		m.style.transitionDuration = '2s';
	});
	m.addEventListener('mouseout', function() {
		m.style.filter = 'sepia(100%)';
		m.style.transitionDuration = '2s';
	});
}

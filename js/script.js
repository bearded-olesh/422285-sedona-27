document.addEventListener('DOMContentLoaded', function() {
	var btn = document.querySelector('.interested-button');
	var form = document.querySelector('.interested-form');
	form.classList.add('hide');

	btn.addEventListener('click', function () {
		form.classList.toggle('hide');
	});
});
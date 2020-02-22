var btn = document.querySelector('.interested-button');

btn.addEventListener('click', function () {
	var form = document.querySelector('.interested-form');

	form.classList.toggle('hide');
});
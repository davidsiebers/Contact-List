const cardsArr = Array.prototype.slice.call(document.querySelectorAll('.card img'));
cardsArr.forEach(e => {
	const degree = 360 * Math.random();
	e.style.filter = 'hue-rotate(' + degree + 'deg)';
});
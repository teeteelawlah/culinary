//select element
const selectElement = function(element){
	return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function() {
	body.classList.toggle('open');
}); 

//scroll reveal
window.sr = ScrollReveal();
sr.reveal('.animate-left', {
	duration: 1000,
	origin: 'left',
	distance: '25rem',
	delay: 300
});

sr.reveal('.animate-right', {
	duration: 1000,
	origin: 'right',
	distance: '25rem',
	delay: 300
});

sr.reveal('.animate-top', {
	duration: 1000,
	origin: 'top',
	distance: '25rem',
	delay: 300
});

sr.reveal('.animate-bottom', {
	duration: 1000,
	origin: 'bottom',
	distance: '25rem',
	delay: 300
});
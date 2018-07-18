var overlay = document.querySelector('.overlay');

// Form
var linkLogin = document.querySelector('.user-login');
var login = document.querySelector('.modalLogin');
var closeLogin = login.querySelector('.modalLogin-btnClose');
var form = document.querySelector('.login-signUpForm');
var fieldLogin = login.querySelector('[name=login]');
var fieldPass = login.querySelector('[name=password]');
var storage = localStorage.getItem('login');

// Map
var linkMap = document.querySelector('.linkMap');
var linkMap1 = document.querySelector('.linkMap1');
var map = document.querySelector('.modalMap');
var closeMap = map.querySelector('.modalMap-btnClose');


overlay.addEventListener('click', function() {
  overlay.classList.remove('showOverlay');
	map.classList.remove('showModalMap');
  login.classList.remove('showModalLogin');
	login.classList.remove('errorModalLogin');
});

window.addEventListener('keydown', function(event) {
	if (event.keyCode === 27) {
		if (overlay.classList.contains('showOverlay') || login.classList.contains('showModalLogin') || map.classList.contains('showModalMap')) {
      overlay.classList.remove('showOverlay');
	    map.classList.remove('showModalMap');
      login.classList.remove('showModalLogin');
	    login.classList.remove('errorModalLogin');
		}
	}
});


// modalLogin
linkLogin.addEventListener('click', function(event) {
	event.preventDefault();
	overlay.classList.add('showOverlay');
	login.classList.add('showModalLogin');
	if (storage) {
		fieldLogin.value = storage;
		fieldPass.focus();
	} else {
		fieldLogin.focus();
	}
});

closeLogin.addEventListener('click', function(event) {
	event.preventDefault();
	overlay.classList.remove('showOverlay');
	login.classList.remove('showModalLogin');
	login.classList.remove('errorModalLogin');
});

form.addEventListener('submit', function(event) {
	if (!fieldLogin.value || !fieldPass.value) {
		event.preventDefault();
		login.classList.remove('errorModalLogin');
		login.offsetWidth = login.offsetWidth;
		login.classList.add('errorModalLogin');
	} else {
		localStorage.setItem('login', fieldLogin.value);
	}
});


// modalMap
closeMap.addEventListener('click', function(event) {
	event.preventDefault();
  overlay.classList.remove('showOverlay');
  map.classList.remove('showModalMap');
});

linkMap.addEventListener('click', function(event) {
	event.preventDefault();
	overlay.classList.add('showOverlay');
	map.classList.add('showModalMap');
});

linkMap1.addEventListener('click', function(event) {
	event.preventDefault();
	overlay.classList.add('showOverlay');
	map.classList.add('showModalMap');
});
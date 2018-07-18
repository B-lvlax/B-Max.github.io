var overlay = document.querySelector('.overlay');

// FEEDBACK Form
//=====================================================
var feedbackBtn = document.querySelector('.feedbackBtn');
var feedback = document.querySelector('.feedback');
var btnClose = document.querySelector('.feedback-btnClose');
var form = document.querySelector('.feedbackForm');
var fieldName = document.querySelector('[name=username]');
var fieldMail = document.querySelector('[name=mail]');
var fieldComment = document.querySelector('[name=response]');
var storageName = localStorage.getItem('name');
var storageMail = localStorage.getItem('mail');

// LOGIN Form
//=====================================================
var loginBtn = document.querySelector('.login-btn');
var loginBtn1 = document.querySelector('.login-btn1');
var login = document.querySelector('.loginForm');
var loginMail = login.querySelector('[name=mail]');
var loginPass = login.querySelector('[name=password]');
var storageLogin = localStorage.getItem('login');

login.addEventListener('mouseleave', function() {
	login.classList.remove('errorLoginForm');
});

loginBtn.addEventListener('mouseover', function() {
	if (storageLogin) {
		loginMail.value = storageLogin;
		loginPass.focus();
	} else {
		loginMail.focus();
	}
});

login.addEventListener('submit', function(event) {
	if (!loginMail.value || !loginPass.value) {
		event.preventDefault();
		login.classList.remove('errorLoginForm');
		login.offsetWidth = login.offsetWidth;
		login.classList.add('errorLoginForm');
	} else {
		localStorage.setItem('login', loginMail.value);
	}
});

// FEEDBACK Form
//=====================================================
function close() {
	overlay.classList.remove('showOverlay');
	feedback.classList.remove('showFeedback');
	feedback.classList.remove('errorFeedback');
}

overlay.addEventListener('click', function() {
	return close();
});

window.addEventListener('keydown', function(event) {
	if (event.keyCode === 27) {
		if (feedback.classList.contains('showFeedback') || overlay.classList.contains('showOverlay')) {
			return close();
		}
	}
});

feedbackBtn.addEventListener('click', function(event) {
  event.preventDefault();
  overlay.classList.add('showOverlay');
	feedback.classList.add('showFeedback');
	if (storageName) {
		fieldName.value = storageName;
		fieldMail.focus();
	} else {
		fieldName.focus();
	}
	if (storageMail) {
		fieldMail.value = storageMail;
		fieldComment.focus();
	} else {
		fieldName.focus();
	}
});

btnClose.addEventListener('click', function(event) {
	event.preventDefault();
	return close();
});

form.addEventListener('submit', function(event) {
	if (!fieldName.value || !fieldMail.value) {
		event.preventDefault();
		feedback.classList.remove('errorFeedback');
		feedback.offsetWidth = feedback.offsetWidth;
		feedback.classList.add('errorFeedback');
	} else {
		localStorage.setItem('name', fieldName.value);
		localStorage.setItem('mail', fieldMail.value);
	}
});



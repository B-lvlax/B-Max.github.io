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
  login.setAttribute('novalidate', true);

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
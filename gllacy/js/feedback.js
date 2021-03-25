// FEEDBACK Form
//=====================================================

var overlay = document.querySelector('.overlay');
var feedbackBtn = document.querySelector('.feedbackBtn');
var feedback = document.querySelector('.feedback');
var btnClose = document.querySelector('.feedback-btnClose');
var form = document.querySelector('.feedbackForm');
var fieldName = form.querySelector('[name=username]');
var fieldMail = form.querySelector('[name=mail]');
var fieldComment = form.querySelector('[name=response]');
var storageName = localStorage.getItem('name');
var storageMail = localStorage.getItem('mail');

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
  form.setAttribute('novalidate', true);
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
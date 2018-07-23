/*======================================================
  FORMS
======================================================*/
$(document).ready(function() {

  function checkField(elem) {
    elem.removeClass('fieldValid').removeClass('fieldError');

    if (elem.val() === '' || elem.val() === ' ') return false;
    // if (!isNaN(parseInt(elem.val()))) return false;
    if (elem.val().length < 2) return false;
    if (elem.is('[type=checkbox]') && elem.is(':checked') === false) return false;
    if (elem.is('[type=radio]') && elem.is(':checked') === false) return false;
    return true;
  }

  function removeError(elem) {
    setTimeout(function() {
      elem.removeClass('fieldError fieldValid');
    }, 5000);
  }

  // Feedback Form
  //=======================================================
  $('.feedbackForm').on('submit', function(e) {
    var
      $blockForm = $('.feedbackForm-wrap'),
      $fields = $('.feedbackForm-input'),
      $name = $(this).find('[type=text]'),
      $mail = $(this).find('[type=email]'),
      $reset = $(this).find('[type=reset]'),
      $storageName = localStorage.getItem('name'),
      $storageMail = localStorage.getItem('mail');

    if ($storageName) $name.value = $storageName;
    if ($storageMail) $mail.value = $storageMail;

    $fields.each(function(i) {
      if (!checkField($(this))) {
        e.preventDefault();
        $(this).addClass('fieldError');

        $blockForm.addClass('formError');
        setTimeout(function() {
          $blockForm.removeClass('formError');
        }, 600);

      } else {
        $(this).removeClass('fieldError');
        $(this).addClass('fieldValid');

        localStorage.setItem('name', $name.value);
        localStorage.setItem('mail', $mail.value);
      }
    });

    $reset.on('click', function() {
      $fields.each(function(i) {
        $(this).removeClass('fieldError fieldValid');
      });
    });

    removeError($fields);
  });


  //Login Form
  //=======================================================
  $('.entryForm').on('submit', function(e) {
    var
      $blockForm = $('.flip-entry'),
      $fields = $('.entryForm-input, .entryForm-check, .question-radio#radio-1'),
      $login = $(this).find('[type=text]'),
      $storageLogin = localStorage.getItem('login');

    if ($storageLogin) $login.value = $storageLogin;

    $fields.each(function(i) {

      if (!checkField($(this))) {
        e.preventDefault();
        $(this).addClass('fieldError');

        $blockForm.addClass('formError');
        setTimeout(function() {
          $blockForm.removeClass('formError');
        }, 600);

      } else {
        $(this).removeClass('fieldError');
        $(this).addClass('fieldValid');

        localStorage.setItem('login', $login.value);
      }
    });
    
    removeError($fields);
  });

});

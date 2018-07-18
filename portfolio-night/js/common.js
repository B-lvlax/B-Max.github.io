/*======================================================
  FLIP CARD
======================================================*/
(function() {
  function flipCard() {
    $('.flip-card').toggleClass('flipCard');
    $('.flip-entry').toggleClass('flipEntry');
    $('.login-btn').toggleClass('login-btn--hidden');
  }

  $(document).on('keyup', function(e) {
    if (e.keyCode === 27) flipCard();
  });

  $('.login-btn, .entryBtn-item--left').each(function() {
    $(this).on('click', function(e) {
      e.preventDefault();
      flipCard();
    });
  });

})();

/*======================================================
  MENU
======================================================*/
(function() {
  function close() {
    $('.menu').removeClass('menu--active');
    $('.nav').removeClass('nav--active');
    $('.nav-item').removeClass('nav-item--show');
    $('.menu-lines').removeClass('menu-lines--act');
  };

  $('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu--active');
    $('.nav').toggleClass('nav--active');
    $('.nav-item').toggleClass('nav-item--show');
    $('.menu-lines').toggleClass('menu-lines--act');
  });

  $(document).on('keyup', function(ep) {
    if (ep.keyCode == 27) close();
  });

  $(document).click(function(e) {
    if ($(e.target).parents().filter('.menu').length != 1 && !$(e.target).hasClass('.menu-btn')) {
      close();
    }
  });
})();

/*======================================================
  SIDEBAR
======================================================*/
(function() {
  $('.sidebar-btn').on('click', function(e) {
    e.preventDefault();
    $('.sidebar').toggleClass('sidebar--show');
    $('.sidebar-btn').toggleClass('sidebar-btn--move');
  });

  $(document).click(function(e) {
    if ($(e.target).parents().filter('.sidebar').length != 1 && !$(e.target).hasClass('.sidebar-btn')) {
      $('.sidebar').removeClass('sidebar--show');
      $('.sidebar-btn').removeClass('sidebar-btn--move');
    }
  });
})();

/*======================================================
  Типо PARRALAX
======================================================*/
(function() {
  $('.container').mousemove(function(e) {
    $('.indexBg-img').css({
      'transform': 'translate3d(' + e.pageX / -15 + 'px, ' + e.pageY / 15 + 'px, 0)'
    });
  });
})();

/*======================================================
  ANIMATION on Scroll
======================================================*/
(function() {
  $(window).scroll(function() {
    $('.blogContent article, .skills-group, .slider-info--active, .slider-slidePic, .feedback-titleWrap, .comments, .about-img').each(function(i) {
      var
        $pos = $(this).offset().top,
        $topOfWindow = $(window).scrollTop();

      if ($pos < $topOfWindow + 900) $(this).addClass('moveUp');
    })
  })
})();

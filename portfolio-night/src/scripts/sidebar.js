/*======================================================
  SCROLLBAR
======================================================*/
(function() {
  var
    $sidebar = $('.sidebar'),
    $sidebarBtn = $('.sidebar-btn'),
    $articles = $('.blogContent article'),
    $links = $('.sidebar a');


  $sidebarBtn.on('click', function(e) {
    e.preventDefault();
    $sidebar.toggleClass('sidebar--show');
    $sidebarBtn.toggleClass('sidebar-btn--move');
  });

  $(document).click(function(e) {
    if ($(e.target).parents().filter($sidebar).length != 1 && !$(e.target).hasClass('sidebar-btn')) {
      $sidebar.removeClass('sidebar--show');
      $sidebarBtn.removeClass('sidebar-btn--move');
    }
  });


  function checkArticle() {
    $articles.each(function() {
      var
        $this = $(this),
        $top = $this.offset().top - 350,
        $bottom = $top + $this.height(),
        $scroll = $(window).scrollTop();

      if ($top < $scroll && $bottom > $scroll) {
        var
          $focus = $this.data('article'),
          $linkData = $links.filter('[href="#' + $focus + '"]');

        $linkData.addClass('active').parent().siblings().children().removeClass('active');
      }
    })
  };

  $(window).scroll(function() {
    checkArticle();
    var
      $list = $sidebar.find('ul'),
      $scroll = $(window).scrollTop();

    if ($sidebar.length > 0) {
      if (($scroll) > $sidebar.offset().top - 100) $list.addClass('sidebar--fixed');
      else $list.removeClass('sidebar--fixed');
    }
  });


  function showArticle(articleData, isAnimate) {
    var
      $direction = articleData.replace(/#/, ''),
      articleData = $articles.filter('[data-article="' + $direction + '"]'),
      $articlePos = articleData.offset().top;

    if (isAnimate) {
      $('body, html').animate({
        scrollTop: $articlePos
      }, 500);
    } else $('body, html').scrollTop($articlePos);
  };

  $links.on('click', function(e) {
    e.preventDefault();
    showArticle($(this).attr('href'), true);
  });

})();

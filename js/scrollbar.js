/*======================================================
  SCROLLBAR
======================================================*/
(function() {
  $('.sidebar a').on('click', function(e) {
    e.preventDefault();
    showArticle($(this).attr('href'), true);
  });

  $(window).scroll(function() {
    checkArticle();
    var
      $fixed = $('.sidebar ul'),
      $scroll = $(window).scrollTop();

    if ($('.sidebar').length > 0) {
      if (($scroll) > $('.sidebar').offset().top - 100) $fixed.addClass('sidebar--fixed');
      else $fixed.removeClass('sidebar--fixed');
    }
  });

  function showArticle(article, isAnimate) {
    var
      $direction = article.replace(/#/, ''),
      article = $('.blogContent article').filter('[data-article="' + $direction + '"]'),
      $articlePos = article.offset().top;

    if (isAnimate) {
      $('body, html').animate({
        scrollTop: $articlePos
      }, 500);
    } else $('body, html').scrollTop($articlePos);

  };

  function checkArticle() {
    $('.blogContent article').each(function() {
      var
        $this = $(this),
        $top = $this.offset().top - 350,
        $bottom = $top + $this.height(),
        $scroll = $(window).scrollTop();

      if ($top < $scroll && $bottom > $scroll) {
        var
          $focus = $this.data('article'),
          $link = $('.sidebar a').filter('[href="#' + $focus + '"]');

        $link.addClass('active').parent().siblings().children().removeClass('active');
      }
    })
  };
})();

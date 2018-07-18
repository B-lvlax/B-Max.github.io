/*======================================================
  PRELOADER
======================================================*/
$(document).ready(function() {
  $('.preloader').removeClass('preloader-noJs');
  $('body').css('overflow', 'hidden');
  $('body').bind('touchmove', function(e) {
    e.preventDefault();
  });

  var $imgs = [];

  $.each($('*'), function() {
    var
      $this = $(this),
      $background = $this.css('background-image'),
      $img = $this.is('img');

    if ($background != 'none') {
      var $path = $background.replace('url("', '').replace('")', '');
      $imgs.push($path);
    }
    if ($img) {
      var $path = $this.attr('src');
      if ($path) $imgs.push($path);
    }
  });

  var 
    $percents = 1,
    $lastRealPercent = 0;

  for (var i = 0; i < $imgs.length; i++) {
    var $image = $('<img>', {
      attr: {
        src: $imgs[i]
      }
    });

    $image.load(function() {
      setPercents($imgs.length, $percents);
      $percents++;
    });
  }

  function setPercents(total, current) {
    var $percent = Math.ceil(current / total * 100);

    var $iterator = setInterval(function() {
      if ($lastRealPercent >= $percent) {
        clearInterval($iterator);
        $iterator = null;
        return;
      }

      var $dash = Math.ceil(316 - $lastRealPercent * 1.58);
      $('.circle-bar').css({
        'stroke-dashoffset': $dash + 'px'
      });
      $('.circle-txt').text($lastRealPercent);

      if ($percent >= 100) $('.circle-small').css('animation-iteration-count', '1');

      $lastRealPercent++;
    }, 5);
  }
});

$(window).load(function() {
  $('body').css('overflow', 'visible');
  $('body').unbind('touchmove');

  $('.preloader-inner').fadeOut(1000, function () {
    $('.preloader').css('display', 'none');
  });
});

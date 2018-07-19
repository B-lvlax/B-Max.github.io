/*======================================================
  SLIDER
======================================================*/
(function() {
  var
    $nextBtn = $('.slider-btn--next'),
    $prevBtn = $('.slider-btn--prev'),
    $slideItemRight = $prevBtn.find('.slider-item'),
    $slideItemLeft = $nextBtn.find('.slider-item'),
    $mainSlide = $('.slider-mainPic'),
    $currentSlideIndex = 0;

  function changeMainPic(slideItems) {
    var $nextImgSrc = slideItems.eq($currentSlideIndex).find('img').attr('src');

    $mainSlide.fadeOut(function() {
      $mainSlide.attr('src', $nextImgSrc);
      $(this).fadeIn();
    });
  }

  function slideInLeftPreview(slideItems) {
    var $nextImgIndex;

    if ($currentSlideIndex + 1 >= slideItems.length) $nextImgIndex = 0;
    else $nextImgIndex = $currentSlideIndex + 1;

    slideItems.filter('.slider-item--active').removeClass('slider-item--active');
    slideItems.eq($nextImgIndex).addClass('slider-item--active');
  }

  function slideInRightPreview(slideItems) {
    var $nextImgIndex;

    if ($currentSlideIndex == 0) $nextImgIndex = slideItems.length - 1;
    else $nextImgIndex = $currentSlideIndex - 1;

    slideItems.filter('.slider-item--active').removeClass('slider-item--active');
    slideItems.eq($nextImgIndex).addClass('slider-item--active');
  }

  function changeSlide(e) {
    e.preventDefault();
    var $this = $(this);

    if ($this.hasClass('slider-btn--prev')) {

      if ($currentSlideIndex - 1 < 0) $currentSlideIndex = $slideItemRight.length - 1;
      else $currentSlideIndex = $currentSlideIndex - 1;

    } else if ($this.hasClass('slider-btn--next')) {

      if ($currentSlideIndex + 1 > $slideItemRight.length - 1) $currentSlideIndex = 0;
      else $currentSlideIndex = $currentSlideIndex + 1;
    }

    changeMainPic($slideItemRight);
    slideInLeftPreview($slideItemLeft);
    slideInRightPreview($slideItemRight);
  }

  function changeDesc(elem) {
    if (elem.is($prevBtn) && elem.find('li.slider-item--active')) {
      var $current = $('.slider-info.slider-info--active');

      if ($current) {
        if ($current.prev().length === 0) $('.slider-info').last().addClass('slider-info--active').siblings().removeClass('slider-info--active');

        $current.prev().addClass('slider-info--active').siblings().removeClass('slider-info--active');
      }
    }
    if (elem.is($nextBtn) && elem.find('li.slider-item--active')) {
      var $current = $('.slider-info.slider-info--active');

      if ($current) {
        if ($current.next().length === 0) $('.slider-info').first().addClass('slider-info--active').siblings().removeClass('slider-info--active');

        $current.next().addClass('slider-info--active').siblings().removeClass('slider-info--active');
      }
    }
  }


  $(document).ready(function() {
    $nextBtn.on('click', changeSlide);
    $nextBtn.on('click', function() {
      changeDesc($(this));
    });
    $prevBtn.on('click', changeSlide);
    $prevBtn.on('click', function() {
      changeDesc($(this));
    });
  });

})();

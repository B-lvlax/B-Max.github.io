var arrowUp = document.querySelector('.arrow-up');
var arrowDown = document.querySelector('.arrow-down');
var catalog = document.querySelector('.catalog-locateWrap');

arrowDown.addEventListener('click', function(event) {
  event.preventDefault();
  arrowDown.classList.add('arrow--active');
  arrowUp.classList.remove('arrow--active');
  catalog.classList.add('locateWrap-reverse');
});

arrowUp.addEventListener('click', function(event) {
  event.preventDefault();
  arrowUp.classList.add('arrow--active');
  arrowDown.classList.remove('arrow--active');
  catalog.classList.remove('locateWrap-reverse');
});
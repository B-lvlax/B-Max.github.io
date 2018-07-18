var form = document.querySelector('.searchForm');
var date = form.querySelector('.input-date');
var num = form.querySelector('.input-num');

form.addEventListener('mouseleave', function() {
  form.classList.remove("error");
});

form.addEventListener('submit', function(event) {
  if (!date.value || !num.value) {
    event.preventDefault();
    form.classList.remove("error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("error");
  }
});
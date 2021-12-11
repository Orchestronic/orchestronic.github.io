const container = document.querySelector('.container');
const openContainer = document.querySelector('.container.show-nav');
const open = document.getElementById('open');
const close = document.getElementById('close');
const motion = document.getElementById('motion');

open.addEventListener('click', () => {
 if (window.matchMedia("(max-width: 100px)").matches) {
  container.classList.add('smallVp');
 }

 container.classList.add('show-nav');
 motion.classList.add('movin');
})

close.addEventListener('click', () => {
 container.classList.remove('show-nav');


});




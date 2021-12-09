const container = document.querySelector('.container');
const open = document.getElementById('open');
const close = document.getElementById('close');
const motion = document.getElementById('motion');

open.addEventListener('click', () => {
 container.classList.add('show-nav');
 motion.classList.add('movin');
})

close.addEventListener('click', () => {
 container.classList.remove('show-nav');


});





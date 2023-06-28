let input = $('.second_block');
let div = $('.vanta-back2-container');

input.addEventListener('resize', ()=>{
 // div.style.width = input.value + 'px';
  div.style.height = input.height   + 'vh'
});

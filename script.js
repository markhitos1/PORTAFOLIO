
const card = document.querySelector('.card');
const button = document.querySelector('.btn-color');
const padreButton = document.querySelector('.card-body');
const infoTabla = document.querySelector('.info-table')

button.addEventListener('click',()=>{
  card.style.height = '400px'
  padreButton.removeChild(button);
  infoTabla.style.visibility = 'visible'
})




let inpAct = document.querySelector('.catalog-navigation-link');
let btnAct = document.querySelector('.catalog-navigation-button');
let ulAct = document.querySelector('.dropdown-list');

inpAct.addEventListener('click', () => {
  btnAct.classList.toggle ('active')
  ulAct.classList.toggle ('checked')
})

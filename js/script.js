let inpAct = document.querySelector('.catalog-navigation-link');
let btnAct = document.querySelector('.catalog-navigation-button');
let ulAct = document.querySelector('.dropdown-list');
let dvOpn = document.querySelector('.shop-user-close');

inpAct.addEventListener('click', () => {
  btnAct.classList.toggle ('active')
  ulAct.classList.toggle ('checked')

})


dvOpn.addEventListener('click', () => {
  dvOpn.classList.toggle ('open')
})

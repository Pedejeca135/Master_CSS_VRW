const arrowServiciosSubMenu = document.getElementById('servicios-submenu');


const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});


arrowServiciosSubMenu.addEventListener('click', ()=> {
  if(arrowServiciosSubMenu.classList.contains('arrow--left'))
  {
    arrowServiciosSubMenu.classList.remove('arrow--left');
    arrowServiciosSubMenu.classList.add('arrow--down');
  }
  else
  {
    arrowServiciosSubMenu.classList.remove('arrow--down');
    arrowServiciosSubMenu.classList.add('arrow--left');
  }
})
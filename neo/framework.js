function swapClass()
{
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
}
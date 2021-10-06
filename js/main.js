document.addEventListener('DOMContentLoaded', ()=> {

const btnMenu = document.querySelector("#btnMenu"),
      menu = document.querySelector("#menu"),
      enlaceBurger = document.querySelector(".enlaceBurger");

btnMenu.addEventListener("click" , function() {
    menu.classList.toggle("mostrar");
});
enlaceBurger.addEventListener("click" , function() {
    menu.classList.toggle("nomostrar");
});

var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    ventana = document.getElementById('ventana-contacto'),
    popup = document.getElementById('popup'),
    btnCerarPopup = document.getElementById('btn-cerrar-popup');

    btnAbrirPopup.addEventListener('click' , function(e) {
        e.preventDefault();
        ventana.classList.add('active')
        popup.classList.add('active')
    })
    btnCerarPopup.addEventListener('click' , function(e) {
        e.preventDefault();
        ventana.classList.remove('active')
        popup.classList.remove('active')
    })

});
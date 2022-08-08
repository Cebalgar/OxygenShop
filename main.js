
//menu hamburguesa movil
const btnMenu= document.getElementById("btn");

const showMenu = document.getElementById("links");

const handleClick = function(event) {
 showMenu.classList.toggle("show");
 btnMenu.classList.toggle("remove");
 //console.log("HOLA");
}

btnMenu.addEventListener("click", handleClick);



// percentage scroller

function handleScroll(){
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; //altura mínima(incluye altura relleno, pero no bordes y márgenes) - la altura que incluye el padding.
    let scrolled = (winScroll/height)*100;

    document.getElementById("bar").style.width=scrolled + "%";
}

document.addEventListener("scroll", handleScroll);



// botón "Return to the Top"

const btnTop = document.getElementById("returnBtn");

const handleTop = () => {
    window.scrollTo( { //scrollTo permite navegar a una posición del scroll
        top:0, 
        behavior:"smooth"
    });
    setTimeout(handleTop, 200);
};

btnTop.addEventListener("click",handleTop);





//menu hamburguesa movil
const btnMenu= document.getElementById("btn");

const showMenu = document.getElementById("links");

var handleClick = function(event) {
 showMenu.classList.toggle("show");
 btnMenu.classList.toggle("remove");
 //console.log("HOLA");
}

btnMenu.addEventListener("click", handleClick);


// percentage scroller

function handleScroll(){
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll/height)*100;

    document.getElementById("bar").style.width=scrolled + "%";
}

document.addEventListener("scroll", handleScroll);


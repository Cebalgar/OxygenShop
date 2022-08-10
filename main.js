
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

function handleTop(){
    setTimeout(function(){
        window.scrollTo({ top:0, behavior:"smooth"})
},200);

}

btnTop.addEventListener("click",handleTop);


 //Implementar validación al formulario
const nameInput = document.getElementById("name");
const mailInput = document.getElementById("mail");
const checkboxInput = document.getElementById("cbox1");
const form= document.getElementById("form");
const error = document.getElementsByClassName("regist");

form.addEventListener("submit", e =>{
    e.preventDefault();
    let regexEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
    
    
    if(nameInput.value.length < 2 || nameInput.value.length >100){
      alert("nombre NO VALIDO");
      
     
    }
    if(!regexEmail.test(mail.value)){
        alert ("el email no es valido")
    }
  
    if(!checkboxInput.checked){
        alert ("checkbox NO esta selecionado")
    }
    
});

//Recoger datos formulario en servidor

const formulario = document.getElementById("form");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    const InputName = document.getElementById("name").value;
    const InputMail = document.getElementById("mail").value;

    const datos = {
        nombre: InputName, 
        mail: InputMail}     

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(datos),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  })

  .then((response) => response.json())
  .then(result => {
    console.log(datos);
  })
  .catch((error)=>{
    console.log ("Error en la petición: " + error);
  })
      
})

















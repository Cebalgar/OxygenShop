
//menu hamburger movil
const btnMenu= document.getElementById("btn");
const showMenu = document.getElementById("links");
const menuX= document.getElementById("btnClosedMenu")


const handleClick = function() {

 showMenu.classList.toggle("show");
 btnMenu.classList.toggle("remove");
 menuX.classList.toggle("show"); 
}
btnMenu.addEventListener("click", handleClick);


menuX.addEventListener("click", ()=>{

  showMenu.style.display = "none";
  menuX.style.display = "none";
  btnMenu.style.display = "block";
});

// percentage scroller

function handleScroll(){
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; //altura mínima(incluye altura relleno, pero no bordes y márgenes) - la altura que incluye el padding.
    let scrolled = (winScroll/height)*100;

    document.getElementById("bar").style.width=scrolled + "%";
}

document.addEventListener("scroll", handleScroll);



// button "Return to the Top"

const btnTop = document.getElementById("returnBtn");

function handleTop(){
    setTimeout(function(){
        window.scrollTo({ top:0, behavior:"smooth"})
},200);

}

btnTop.addEventListener("click",handleTop);


//validate form
const nameInput = document.getElementById("name");
const mailInput = document.getElementById("mail");
const checkboxInput = document.getElementById("cbox1");
const form= document.getElementById("form");
const error = document.getElementsByClassName("regist");

form.addEventListener("submit", e =>{
    e.preventDefault();
    let regexEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
    
    
    if(nameInput.value.length < 2 || nameInput.value.length >100){

      nameInput.style.borderBottom= "red solid 2px";
      swal("nombre NO VALIDO", "El nombre debe contener más de 2 carácteres", "error");
    
    }else{
      nameInput.style.borderBottom= "green solid 2px";
    }
    if(!regexEmail.test(mail.value)){
        mailInput.style.borderBottom= "red solid 2px";
        swal("El email no es valido","Introduzca un mail valido","error" );
      
    }else{
      mailInput.style.borderBottom= "green solid 2px";
    }
    
  
    if(!checkboxInput.checked){
        swal("Aceptar Aviso Legal"," ","error")
    }
    
});

//Submit form data

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
  .then(datos => {
    console.log(datos);
  })
  .catch((error)=>{
    console.log ("Error en la petición: " + error);
  })
      
})

//  POPUP MODAL

const modal= document.getElementById("popup");
const modalClosed = document.getElementById("closed");
const formModal = document.getElementById("FormModal");

const showModal = ()=>{
  localStorage.setItem("show",true);
}


if(typeof(Storage) !== "undefined"){
  if(!localStorage.getItem("show")){
    setTimeout(()=>{
      modal.style.display= "flex";
}, 5000);
    
  }
}

formModal.addEventListener("submit", function(e){
  e.preventDefault();


    let regexMail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
    
    if(!regexMail.test(mailPopup.value)){
    
      swal("El email no es valido","Introduzca un mail valido","error" );
    }
  
  })

modalClosed.addEventListener("click",(e)=>{
  modal.style.display = "none";
})

modal.addEventListener("click", (e)=>{
  if(e.target.classList.contains("modal")){
    modal.style.display= "none";
  }
});
window.addEventListener("keyup", (e)=>{
  if(e.key === "Escape"){
    modal.style.display= "none";
  }
});


//send mail

const formPopup = document.getElementById("FormModal");



formPopup.addEventListener("submit", function(e){
  e.preventDefault();


  const mailPopup = document.getElementById("mailPopup").value;

  const datos = 
  {
   mail: mailPopup
  };     

fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
body: JSON.stringify(datos),
headers: {
  'Content-type': 'application/json; charset=UTF-8',
},
})

.then((response) => response.json())
.then(datos => {
  console.log(datos);
})
.catch((error)=>{
  console.log ("Error en la petición: " + error);
}) 

});

const susbClosed = document.getElementById("sendSubscribe");

susbClosed.addEventListener("click",(e)=>{
  modal.style.display = "none";
});

// Currency Selector
const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json";

const select = document.getElementById("options");
const basic = document.getElementById("amountBasic");
const profesional = document.getElementById("amountProfesional");
const premiun = document.getElementById("amountPremiun");

fetch(url)
.then((response) => response.json())
.then(data => {
 
  select.addEventListener("change", (e)=>{
    switch(e.target.value){
      case "usd": 
      basic.textContent ="$ 0";
      profesional.textContent = "$ 25";
      premiun.textContent = "$ 60";
      break;
      
      case "gbp":
      basic.textContent = "£ 0";
      profesional.textContent= "£" + (25 * data.usd.gbp).toFixed(2);
      premiun.textContent = "£" + (60 * data.usd.gbp).toFixed(2);
      break;
      
      case "eur":
      basic.textContent = "€ 0";
      profesional.textContent= "€" + (25 * data.usd.eur).toFixed(2);
      premiun.textContent = "€" + (60 * data.usd.eur).toFixed(2);
      break;
      default:
        console.log("default");
      }

  })
  })
  .catch((error)=>{
    console.log ("Error en la petición: " + error);
  });

  //SLIDER
 

  const sliders= document.getElementById("slider");
  const imgPhotos= document.getElementsByClassName("img-photo");
  const btnRight= document.getElementById("next");
  const btnLeft= document.getElementById("before");
  const dots = document.getElementsByClassName("dot");


// DOTS SLIDER
for( let i = 0; i < dots.length; i++){
  dots[i].addEventListener("click", (e)=>{
    for ( let i = 0; i < imgPhotos.length; i++){
      if(e.target.value == i){
        imgPhotos[i].style.display = "block";
      }else{
        imgPhotos[i].style.display = "none";
      }
    }
  })
}

//ARROWS SLIDER

let indice = 1;
showSlider(indice);

function nextSlide(n){
  showSlider( indice+=n);
}
setInterval(function sliderAuto(){
  showSlider(indice+=1)
},3000);

function showSlider(n){
  let i;
  if(n > imgPhotos.length){
    indice = 1;
    //console.log(indice);
  }
   if(n < 1){
    indice = imgPhotos.length;
   }
   for( let i = 0; i < imgPhotos.length; i++){
    imgPhotos[i].style.display = "none";
   }
   imgPhotos[indice-1].style.display = "block";
}

btnRight.addEventListener("click", ()=>{
  nextSlide(1);
});
btnLeft.addEventListener("click", ()=>{
  nextSlide(-1);
});


 



  


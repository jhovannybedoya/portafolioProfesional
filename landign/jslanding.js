const formulario = document.querySelector("#formulario");
const buton = document.querySelector("#buton");
const resultado = document.querySelector("#Resultado")


const retos= [
  {nombre: 'Expanding Cards', url: './Retos/Dia 1- Expanding Cards/index.html', img:'./Retos/Dia 1- Expanding Cards/Preview-reto.PNG'},
  {nombre: 'Progress Steps', url: './Retos/Día 2 - Progress Steps/index.html', img:'./Retos/Día 2 - Progress Steps/Reto2.png'},  
  {nombre: 'Rotating Navegation', url: './Retos/Día 3 - Rotating Navigation/index.html', img:'./Retos/Día 3 - Rotating Navigation/Reto3.png'},
  {nombre: 'Hidden Search', url: './Retos/Día 4 - Hidden Search/index.html', img:'./Retos/Día 4 - Hidden Search/Reto4.png'},
  {nombre: 'Blurry Loading', url: './Retos/Día 5 - Blurry Loading/index.html', img:'./Retos/Día 5 - Blurry Loading/Reto5.png'},
  {nombre: 'Drag N Drop', url: './Retos/Día 6 - Drag N Drop/index.html', img:'./Retos/Día 6 - Drag N Drop/Reto6.png'},
  {nombre: 'AutoText', url: './Retos/Día 7 - AutoText/index.html', img:'./Retos/Día 7 - AutoText/Reto7.png'},
  {nombre: 'Hoverboard', url: './Retos/Día 8 - Hoverboard/index.html', img:'./Retos/Día 8 - Hoverboard/Reto8.png'},
  {nombre: 'Scroll Animation', url: './Retos/Día 9 - Scroll Animation/index.html', img:'./Retos/Día 9 - Scroll Animation/Reto9.png'},
  {nombre: 'Form input wave', url: './Retos/Día 10 - Form input wave/index.html', img:'./Retos/Día 10 - Form input wave/Reto10.png'},
  {nombre: 'Dad Jokes', url: './Retos/Día 11 - Dad Jokes/index.html', img:'./Retos/Día 11 - Dad Jokes/Reto11.png'},
  {nombre: 'Sound Board', url: './Retos/Día 12 - Sound Board/index.html', img:'./Retos/Día 12 - Sound Board/Reto12.png'},
  {nombre: ' Live User Filter', url: './Retos/Día 13 - Live User Filter/index.html', img:'./Retos/Día 13 - Live User Filter/live User Filter.png'},
  {nombre: 'Button Ripple Effect', url: './Retos/Día 14 - Button Ripple Effect/index.html', img:'./Retos/Día 14 - Button Ripple Effect/reto 14.png'},
  {nombre: ' Background Slider', url: './Retos/Día 15 - Background Slider/index.html', img:'./Retos/Día 15 - Background Slider/reto 15.png'},
  {nombre: 'Kinetic loader', url: './Retos/Día 16 - Kinetic loader/index.html', img:'./Retos/Día 16 - Kinetic loader/reto 16.png'},
  {nombre: 'Netflix Navigation', url: './Retos/Día 17 - Netflix Navigation/retos 17.png', img:'./Retos/Día 17 - Netflix Navigation/retos 17.png'},
  {nombre: 'Testimonial Box Switcher', url: './Retos/Día 18 - Testimonial Box Switcher/index.html', img:'./Retos/Día 18 - Testimonial Box Switcher/reto 18.png'},
  {nombre: 'Pokedex', url: './Retos/Día 19 - Pokedex/index.html', img:'./Retos/Día 19 - Pokedex/reto 19.png'},
  {nombre: 'Doble click Heart', url:'./Retos/Día 20 - Doble click Heart/index.html', img:'./Retos/Día 20 - Doble click Heart/reto 20.png'},
  {nombre: 'Event Keycodes', url: './Retos/Día 21 - Event Keycodes/index.html', img:'./Retos/Día 21 - Event Keycodes/reto 21.png'},
  {nombre: 'Mobile Nav Navigation', url: './Retos/Día 22 - Mobile Nav Navigation/index.html', img:'./Retos/Día 22 - Mobile Nav Navigation/reto 22.jpg'},
  {nombre: 'Drink Water', url: './Retos/Día 23 - Drink Water/index.html', img:'./Retos/Día 23 - Drink Water/retro 23.jpg'},
  {nombre:'Feedback UI Desing', url: './Retos/Día 24 - Feedback UI Desing/index.html', img:'./Retos/Día 24 - Feedback UI Desing/reto 24.png'},
  {nombre: 'GitHub Profile', url: './Retos/Día 25 - GitHub Profile/index.html', img:'./Retos/Día 25 - GitHub Profile/reto 25.png'},
  {nombre: 'Sticky Navigation', url: './Retos/Día 26 - Sticky Navigation/index.html', img:'./Retos/Día 26 - Sticky Navigation/reto 26.png'}
]


//console.log(galeria)

const filtrar=()=>{
    
  resultado.innerHTML='';

 const texto = formulario.value.toLowerCase();

 for(let imagen of retos){
   let nombre = imagen.nombre.toLowerCase();
   if(nombre.indexOf(texto) !== -1){//retona el elemento si existe o si no -1
     resultado.innerHTML +=
     `<div class = "imagenreto">
     <h2 class = "titulo_reto">${imagen.nombre}</h2> 
      <a href="${imagen.url}"> 
      <img src="${imagen.img}"> 
      </a>
      </div>`
   }
  }

      if (resultado.innerHTML===''){
    resultado.innerHTML+=`<h2> no se ha encontrado el reto con el nombre: "${texto}"</h2>`

  }
}

boton.addEventListener('click',filtrar)
formulario.addEventListener('keyup', filtrar)
 
filtrar();

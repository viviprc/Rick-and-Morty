import rickAndMorty from './promesa'
import $ from 'jquery'



const promesaCarga = rickAndMorty.then((characters) => new Promise((resolve) => {
  characters.forEach(e => {
    document.getElementById('cartoons').innerHTML += `<div class="cartoons-container"><img id="${e.id}" src="${e.imagen}">
      <ul>
        <li><b>${e.nombre}</b></li>
        <li>${e.genero}</li>
        <li>${e.especie}</li>
        <li>${e.estado}</li>
      </ul>
    </div>`;
  });
  
  resolve()
}));

promesaCarga.then(() => {
  $('ul').hide();
    
  $('img').click(function(){
    $(this).next('ul').toggle();
  });
})





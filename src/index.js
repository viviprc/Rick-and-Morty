import rickAndMorty from './promesa'
import $ from 'jquery'

rickAndMorty.then((characters) => {
  characters.forEach(e => {
    document.getElementById('cartoons').innerHTML += `<div class="cartoons-container"><img id="${e.id}" src="${e.imagen}">
      <ul>
        <li>${e.nombre}</li>
        <li>${e.genero}</li>
        <li>${e.especie}</li>
        <li>${e.estado}</li>
      </ul>
    </div>`;
  });
  $(document).ready(function(){
    $('ul').hide();
    
     $('img').click(function(){
       $(this).next('ul').toggle();
    });
    });
  
  
});






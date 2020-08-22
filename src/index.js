import rickAndMorty from './promesa'
import Character from './Personajes'
import $ from 'jquery'

rickAndMorty.then((characters) => {
  const eachCharacter = document.getElementById('characters')
  characters.forEach(e => {
    document.getElementById('cartoons').innerHTML += `<img id="${e.id}" src="${e.imagen}">`
    
  });
});


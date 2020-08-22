import axios from 'axios'
import Character from './Personajes'

const rickAndMorty = (() => {
  return new Promise(async (resolve, reject) => {
      try {
          const llamadaApi = await axios.get("https://rickandmortyapi.com/api/character");
          let information = llamadaApi.data.results
          let characters = []
          information.forEach(e => {
              characters.push(new Character(e.name, e.id, e.gender,  e.species, e.status, e.image))
          });
          resolve(characters)
      } catch (error) {
          reject(`Tenemos un error (Promesa en rickAndMorty): ${error}`)
      }

      
  })
})();

export default rickAndMorty
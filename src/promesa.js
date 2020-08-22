import axios from 'axios'
import Character from './Personajes'

const rickAndMorty = (async() => {
    try{
        const llamadaApi= await axios.get("https://rickandmortyapi.com/api/character");
        let information = llamadaApi.data.results
        let characters = []
        information.forEach(e => {
            characters.push(new Character(e.name, e.id, e.gender,  e.species, e.status, e.image))
        });
        return characters
    }
    catch(error){
        console.log(`Algo no esta bien, tienes el error:${error}`)
    };
})();


export default rickAndMorty
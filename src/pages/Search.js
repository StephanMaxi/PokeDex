import '../styles/App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import PokeCard from '../components/cards/PokeCard';
import api from '../services/api';


/* 
ToDo:
move all of the code to the diffent folders
maybe make the types the image that pokemon uses
get pokemon details page running
add bars for stats
*/


function Search() {
//setting use states
//pokemon and setting it to an object


//pokemon search will be an array of strings 
const [pokemonSearch,setPokemonSearch] = useState([]);
const [text,setText] = useState("");
//using axios to have suggestion search
useEffect(()=>{
  //loading in all the pokemon from the pokedex
  const loadPokemon = async () => {
    const response = await api.get(`/pokemon/?limit=2000`);
    console.log(response.data);
    setPokemonSearch(response.data.data);
  }
  loadPokemon();

}, [])


const [pokemonName,setPokemonName] = useState("");
const [pokemonChosen,setPokemonChosen] = useState(false);
//the setter and getter mthods and the data inside the useState is that datafeilds
const [pokemon,setPokemon] = useState({ 
  species: "",
  Img: "", 
  hp: "",
  attack: "",
  defense: "",
  specialattack: "",
  specialdefense: "", 
  speed: "",
  type: "",
});
//using axios for http request

const searchPokemon = () => {
  //we use back ticks for urls/hyperlinks
  //using the dollor sign to append the pokemonname to the link
  //then use the then promise to get a responce then log response
  api.get(`/pokemon/${pokemonName}`).then((Response)=> {
    setPokemon({name: pokemonName, 
       species: Response.data.species.name,
       Img: Response.data.sprites.front_default, 
       hp: Response.data.stats[0].base_stat,
       attack: Response.data.stats[1].base_stat,
       defense: Response.data.stats[2].base_stat,
       specialattack: Response.data.stats[3].base_stat,
       specialdefense: Response.data.stats[4].base_stat, 
       speed: Response.data.stats[5].base_stat,
       type: Response.data.types,
      });
      setPokemonChosen(true);
      //setting the input text
      
  });
};


  return (
    <div className='App'>
      <div className='TitleSection'>
      <h1>Pokemon Showdown</h1>
      <input type="text" onChange={(event) =>{ 
        setPokemonName(event.target.value)}}
        />
      <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
      <PokeCard
      pokemonChosen={pokemonChosen.valueOf(true)}
      name = {pokemon.name}
      type = {pokemon.type}
      Img = {pokemon.Img}
      />
    </div>
  );
}

export default Search;

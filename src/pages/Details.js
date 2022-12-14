import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import pokeapi from '../services/pokeapi';
import { Col, Container, Row } from 'react-bootstrap';
import PokeCard from '../components/cards/PokeCard';
import PokemonStats from '../components/cards/PokemonStats';
import Pokemoninfo from '../components/cards/PokemonInfo';
import PokeText from '../components/cards/PokeText';
import PokemonEvolution from '../components/cards/PokemonEvolve';



//TODO
//Things that want to have on the details page
//  Name,Pic,Stats with moving bars on page load,Evolution Chain, Species,Hieght, Weight, Ablities, catch rate, gender ratio wirh bar,weaknesses
//props allow the funtion to be a matched to a pokemon
function Details() {
const {name} = useParams();
const [pokemon,setPokemon] = useState({});
const [pokemonChosen,setPokemonChosen] = useState(false);
//things in main pokemon endpoind
// id,name,hieght,weight,abilites,spices,image,states,type
//GET https://pokeapi.co/api/v2/type/{id or name}/ gives the types and the damage relation
//GET https://pokeapi.co/api/v2/pokemon-species/{id or name}/ give gender rate, capture rate 
//GET https://pokeapi.co/api/v2/evolution-chain/{id}/ gives the evolution chain using the id

        //on page load

        useEffect(()=> {
            //pull data from the searchpage 
            //use that data to populate the details page
            // define the load
            function loadPokemon () {
                pokeapi.get(`/pokemon/${name}`).then((Response) => {
                    // this is going to get the detials from the api from the response and load it into the 
                    //loadDetails fucntion
                    if(Response.status === 200){
                    loadDetails(Response.data);
                    }
                })
                .catch((error) => {
                    console.log(error);
                  });
            }
            //running the fuction
            loadPokemon();
           
        },[]);


async function loadDetails(poke) {
    //try 
    //need to load everything thats not in the main json
    try {
        let pokemonSpecies = await pokeapi.get(`/pokemon-species/${name}`);
      //  let pokemonTypes = await pokeapi.get(`type/${poke.type}`);
        //apends the pokemonSpecies and gets the data.evolutionchain.url 
        let pokemonEvolution = await axios.get(pokemonSpecies.data.evolution_chain.url);
        console.log(pokemonSpecies);

        //need to add the text for all of the latest versions
        var sword_flavor_text = "";
        var shield_flavor_text = "";
        var flavor_text_default = "";
        //map to get the latest english flavor text
        pokemonSpecies.data.flavor_text_entries.map((item) =>{
            if (item.language.name !== "en") return false;
            if(item.version.name === "sword"){
                sword_flavor_text = item.flavor_text;
            }else if (item.version.name === "shield"){
                shield_flavor_text = item.flavor_text;
            }
            flavor_text_default = item.flavor_text;
        });

        var abilities = "";
            poke.abilities.map((item,index) => (
                abilities += `${item.ability.name}${
                    //if its one then end else  add a comma
                    poke.abilities.length === index + 1 ? "": ", "
                }`
            ));

            //make the pokemon object
        var obj  = {
            Img: poke.sprites.front_default,
            id: poke.id,
            types : poke.types,
            height : poke.height,
            weight : poke.weight,
            abilities,
            gender_rate: pokemonSpecies.data.gender_rate,
            capture_rate: pokemonSpecies.data.capture_rate,
            stats: poke.stats,
            flavor_text: pokemonSpecies.data.flavor_text_entries.flavor_text,
            sword_flavor_text,
            shield_flavor_text,
            flavor_text_default,
            evolution : pokemonEvolution.data.chain,          
        };

        //setting the details using the obj we created
       
        setPokemon(obj);
        setPokemonChosen(true);
        
    } catch(error) {
        console.log(error);
    }
}


console.log(pokemon);

// the only issue that i see is the making the arrows go left when it is a straint evo chian
// and it going diagonal if there are diffent evo forms
    return(
        <div className='App'>
    <Container fluid>
    <Row>
        <Col xs={12} md={6}>
    <PokeCard   
      pokemonChosen={pokemonChosen.valueOf(true)}
       name = {name}
       type = {pokemon.types}
        Img = {pokemon.Img}
         
        disabled />
        
        </Col>
        <Col xs={12} md={6}>
            <Pokemoninfo 
            height = {pokemon.height} 
            weight = {pokemon.weight}
            capture_rate = {pokemon.capture_rate}
            gender_rate = {pokemon.gender_rate} 
            abilities = {pokemon.abilities}
            />
            <PokeText
            sword_flavor_text = {pokemon.sword_flavor_text}
            shield_flavor_text = {pokemon.shield_flavor_text}
            flavor_text_default = {pokemon.flavor_text_default}
            />
        </Col>
        <Col xs={12}>
        <PokemonStats stats={pokemon.stats} type={pokemon.types}/>
        </Col>
        </Row>
        <PokemonEvolution data={pokemon.evolution} type={pokemon.types}/>
       </Container>     
   </div>
    );
    }

export default Details;
    
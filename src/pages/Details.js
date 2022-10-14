import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/App.css';
import axios from 'axios';
import api from '../services/api';
import { Col, Container, Row } from 'react-bootstrap';
import PokeCard from '../components/cards/PokeCard';
import PokemonStats from '../components/cards/PokemonStats';



//TODO
//Things that want to have on the details page
//  Name,Pic,Stats with moving bars on page load,Evolution Chain, Species,Hieght, Weight, Ablities, catch rate, gender ratio wirh bar,weaknesses
//props allow the funtion to be a matched to a pokemon
function Details(...props) {
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
                api.get(`/pokemon/${name}`).then((Response) => {
                    // this is going to get the detials from the api from the response and load it into the 
                    //loadDetails fucntion
                    if(Response.status == 200){
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
        let pokemonSpecies = await api.get(`/pokemon-species/${name}`);
      //  let pokemonTypes = await api.get(`type/${poke.type}`);
        //apends the pokemonSpecies and gets the data.evolutionchain.url 
        let pokeEvolution = await axios.get(pokemonSpecies.data.evolution_chain.url);
        console.log(pokeEvolution);
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
            evolution: pokeEvolution.data.chain,
        };

        //setting the details using the obj we created
       
        setPokemon(obj);
        setPokemonChosen(true);
        
    } catch(error) {
        console.log(error);
    }
}




// the only issue that i see is the making the arrows go left when it is a straint evo chian
// and it going diagonal if there are diffent evo forms
    return(
        <div className='App'>
    <Container fluid>
    <Row>
        <Col xs={6} md={4}>
    <PokeCard   
      pokemonChosen={pokemonChosen.valueOf(true)}
       name = {name}
       type = {pokemon.types}
        Img = {pokemon.Img}
         
        disabled />
        
        </Col>
        <Col xs={12} md={8}>
        </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <PokemonStats stats={pokemon.stats} type={pokemon.types}/>
        </Col>
        </Row>
       </Container>     
   </div>
    );
    }

export default Details;
    
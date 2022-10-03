import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/App.css';
import axios from 'axios';
import api from '../services/api';



//TODO
//Things that want to have on the details page
//  Name,Pic,Stats with moving bars on page load,Evolution Chain, Species,Hieght, Weight, Ablities, catch rate, gender ratio wirh bar,weaknesses
//props allow the funtion to be a matched to a pokemon
function Details(...props) {
const {name} = useParams();
const [pokemon,setPokemon] = useState({});
//things in main pokemon endpoind
// id,name,hieght,weight,abilites,spices,image,states,type
//GET https://pokeapi.co/api/v2/type/{id or name}/ gives the types and the damage relation
//GET https://pokeapi.co/api/v2/pokemon-species/{id or name}/ give gender rate, capture rate 
//GET https://pokeapi.co/api/v2/evolution-chain/{id}/ gives the evolution chain using the id
        const [details,setDetails] = useState({});

        //on page load

        useEffect(()=> {
            //pull data from the searchpage 
            //use that data to populate the details page
            // define the load
            const loadPokemon = () => {
                api.get(`/pokemon/${name}`).then((Response) => {
                    // this is going to get the detials from the api from the response and load it into the 
                    //loadDetails fucntion
                    loadDetails(Response.data);
                })
            }
            //running the fuction
            loadPokemon();
        },[]);


async function loadDetails(poke) {
    //try 
    //need to load everything thats not in the main json
    try {
        let pokemonSpecies = await api.get(`/pokemon-species/${name}`);
        let pokemonTypes = await api.get(`type/${poke.type}`);
        //apends the pokemonSpecies and gets the data.evolutionchain.url 
        let pokemonEvolution = await api.get(pokemonSpecies.data.evolution_chain.url)
        
        var abilites = "";
            poke.abilites.map((item,index) => {
                abilites += `${item.abilies.name}${
                    //if its one then end else  add a comma
                    poke.abilies.length == index + 1 ? "": ","
                }`;
            });

            //make the pokemon object
        var pokiobj = {
            id : poke.id,
            types : poke.type,
            name : poke.name,
            height : poke.height,
            weight : poke.weight,
            abilites,
            gender_rate: pokemonSpecies.data.gender_rate,
            capture_rate: pokeSpecies.data.capture_rate,
            stats: poke.stats,
            evolution: pokemonEvolution.data.chain,
        };

        //setting the details using the obj we created

        setDetails(pokiobj);
    } catch(error) {
        console.log(error);
    }

}
        




// the only issue that i see is the making the arrows go left when it is a straint evo chian
// and it going diagonal if there are diffent evo forms
    return(
    
    
    <h1>{name}</h1>
    
    
    );
    }

export default Details;
    
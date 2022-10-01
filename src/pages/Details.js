import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/App.css';
import axios from 'axios';
import api from '../services/api';

//props allow the funtion to be a matched to a pokemon
function Details(...props) {
    const {name} = useParams();
        const [pokemon,setPokemon] = useState("")
        const [details,setDetails] = useState({});

        //on page load

        useEffect(()=> {
            //pull data from the searchpage 
            //use that data to populate the details page
            // define the load
            const loadPokemon = () => {
                api.get(`/pokemon/${name}`).then((Response) => {
                    setPokemon({});

                })

            }

        },[]);


    return(
    
    
    <h1>{name}</h1>
    
    
    );
    }

export default Details;
    
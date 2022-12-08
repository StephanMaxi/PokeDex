import react, { useEffect } from 'react';
import backendapi from '../services/backendapi';


function Home() {
    
        useEffect( () =>{
            const getUsers = async ()=>{
            let response = await backendapi.get("/user")
            console.log(response.data);
            }
            getUsers();
        },[]);



        return (
            
            "400"
            
            );
}

export default Home

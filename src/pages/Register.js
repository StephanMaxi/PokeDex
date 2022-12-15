import axios from 'axios';
import react, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/home.css"
import backendapi from '../services/backendapi';
function Register ()  {
            const [firstName,setFirstName] = useState("");
            const [lastName,setLastName] = useState("");
            const [email,setEmail] = useState("");
            const [password,setPassword] = useState("");
            const[user,setUser]= useState({
                firstName: "",
                lastName: "",
                email: "",
                password: ""

            })

           
            function validateForm(){
             return  (email.length > 0 && password.length > 0);
            }
            function handleSubmit(event){
                event.preventDefault();
            }

            const sender= ()=>{
                setUser({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                });
                const response = backendapi.post("/registration",user);
                console.log(response);
            }

        return (
            
            <div className='Form'>
            <div className='form-container'>
            <div className="header">
                <p>Login</p>
            </div>
            <div className='body'>
            <input
            type="text"
            placeholder='First Name'
            id='firstName'
            onChange={(event)=>
            {setFirstName(event.target.value)}
            }
            />
             <input
            type="text"
            placeholder='Last Name'
            id='lastName'
            onChange={(event)=>
            {setLastName(event.target.value)}
            }
            />
            <input
            type="text"
            placeholder='Email'
            id='email'
            onChange={(event)=>
            {setEmail(event.target.value)}
                }
            />
            <input
            type="password"
            placeholder='Password'
            id='password'
            onChange={(event)=>
            {setPassword(event.target.value)}
                }
            />
            </div>
            <div className='footer'>
            <button
            disabled={(!validateForm)}
            onClick={sender}
            >Register</button>
            <Link to={`/`}>Login Here</Link>
            </div>
            </div>
        </div>
        

            );
};

export default Register

import react, { useState } from 'react';
import "../styles/home.css"
import { Link } from "react-router-dom";
function Login () {
        const [checked, setChecked] = useState("false");
        const [user,setUser] = useState(


        )


        return (
            <div className='Form'>
                <div className='form-container'>
                <div className="header">
                    <p>Login</p>
                </div>
                <div className='body'>
                <input
                type="email"
                placeholder='Email'
                />
                <input
                type="password"
                placeholder='Password'
                />
                </div>
                <div className='footer'>
                <button>Login</button>
                <Link to={`/register`}>Register Here</Link>
                </div>
                </div>
            </div>
            
            
            );
}

export default Login

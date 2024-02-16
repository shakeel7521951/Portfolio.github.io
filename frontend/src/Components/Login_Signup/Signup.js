import React, { useEffect, useState } from "react";
import './LoginSignup.css';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('User');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);


    const SignupHandler = async () => {
        try {
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                body: JSON.stringify({ name, email, password }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const user = await response.json(); 
                localStorage.setItem('User', JSON.stringify(user));
                navigate("/");
                alert("You Have Signed In Successfully");
            } else {
                alert("Enter correct credentials");
            }
        } catch (error) {
            console.error("Error during signup:", error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Signup Form</h1>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                </div>
                <button type="button" onClick={SignupHandler}>Signup</button>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    )
}

export default Login;
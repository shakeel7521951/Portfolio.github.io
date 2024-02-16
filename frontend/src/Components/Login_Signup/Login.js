import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './LoginSignup.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginHandler = async () => {
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                body: await JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const user = await response.json();
                localStorage.setItem('User', JSON.stringify(user));
                navigate('/');
                alert("You have logged in successfully");
            } else {
                const errorData = await response.json();
                console.error("Login failed:", errorData.message);
                alert(`Login failed: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred during login. Please try again later.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Login Form</h1>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                </div>
                <button type="button" onClick={loginHandler}>Login</button>
                <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
            </div>
        </div>
    );
}

export default Login;

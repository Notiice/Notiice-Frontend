import React, { useState } from 'react';
import './Login.css'

function LoginScreen() {
    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = 'https://notiice.herokuapp.com/api/connect/google';
        // Perform login here, using email and password
    }
    return (
        <div>
            
            <h1>Notiice</h1>
            <h5>Manage anything and everything in one place</h5>
            <button onClick={handleSubmit}>Log in with Google</button>
        </div>
    );
}

export default LoginScreen;

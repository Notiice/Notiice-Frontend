import React from 'react';
import Navbar from '../components/Navbar';

function Home(props) {

    if(localStorage.getItem('token') == null) {
        window.location.href = '/login';
    }

    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            <Navbar/>
            <div>
                <h1>Home</h1>
                <h4>Hello {user.username}</h4>
            </div>
        </div>
    );
}

export default Home;

import React from 'react';
import Navbar from '../components/Navbar';

function Home(props) {

    if(localStorage.getItem('token') == null) {
        window.location.href = '/login';
    }

    const user = JSON.parse(localStorage.getItem('user'));

    async function getCalendars() {
        const response = await fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList/' + 1, {
            method: 'POST',
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        console.log(response);
    }


    return (
        <div>
            <Navbar/>
            <div>
                <h1>Home</h1>
                <h4>Hello {user.username}</h4>
            </div>
            <button onClick={getCalendars}>get clenders</button>
        </div>
    );
}

export default Home;

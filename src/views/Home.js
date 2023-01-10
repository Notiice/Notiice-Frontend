import React from 'react';
import Calendar from '../components/Calendar/Calendar';
import Navbar from '../components/Navbar';
import Notes from '../components/Notes/Notes';

import './Home.scss';

function Home(props) {

    if(localStorage.getItem('token') == null) {
        window.location.href = '/login';
    }

    return (
        <>
            <Navbar/>
            <div className='feature-container' >
                <Notes />
                <Calendar />
            </div>
        </>
    );
}

export default Home;

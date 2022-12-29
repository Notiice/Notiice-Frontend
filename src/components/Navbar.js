import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const logout = (event) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
    }

    let user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className='navbar'>
            <div className='navbar_logo'>Notiice</div>
            <div className='navbar_links'>
                Logged in as {user.username}&nbsp;&nbsp;
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
}

export default Navbar;

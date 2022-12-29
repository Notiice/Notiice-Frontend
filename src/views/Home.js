import React from 'react';

function Home(props) {

    if(localStorage.getItem('token') == null) {
        window.location.href = '/login';
    }

    const user = JSON.parse(localStorage.getItem('user'));

    const logout = (event) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
    }
    return (
        <div>
            <h1>Home</h1>
            <h4>Hello {user.username}</h4>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Home;

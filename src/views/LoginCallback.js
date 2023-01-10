import React from 'react';

function LoginCallback(props) {

    const currentUrl = window.location.href;

    async function login(token) {
        const response = await fetch('https://notiice.herokuapp.com/api/auth/google/callback?id_token=' + token);
        const data = await response.json();
        localStorage.setItem('token', data.jwt);
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = '/';
    }

    const startIndex = currentUrl.indexOf('id_token=') + 'id_token='.length;
    const token = currentUrl.substring(startIndex);
    login(token);


    return (
        <div>
            <p>Loading...</p>
        </div>
    );
}

export default LoginCallback;

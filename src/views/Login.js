import React, { useState } from 'react';

function LoginScreen() {
    const [data, setData] = useState(null);

    // Get the current URL
    const currentUrl = window.location.href;

    // Parse the query string of the URL
    const searchParams = new URLSearchParams(currentUrl);

    async function login(token) {
        const response = await fetch('https://notiice.herokuapp.com/api/auth/google/callback?id_token=' + token);
        const data = await response.json();
        setData(data);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = 'https://notiice.herokuapp.com/api/connect/google';
        // Perform login here, using email and password
    }
    // Check if the `param` parameter exists
    if (currentUrl.includes('id_token')) {
        const startIndex = currentUrl.indexOf('id_token=') + 'id_token='.length;
        const token = currentUrl.substring(startIndex);
        login(token);
    }

    return (
        <div>
            {data ? (
                <div>
                    Logged in as {data.user.username}
                </div>
            ) : (
                <button onClick={handleSubmit}>Login with Google</button>
            )}
        </div>
    );

}

export default LoginScreen;

function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = {
        name: name,
        email: email
    };

    const authToken = '401';

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(data)
    };

    return fetch(url, config)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const newId = data.id;
            document.body.innerHTML += `<p>New ID: ${newId}</p>`;
            return newId;
        })
        .catch(error => {
            console.error('Error details:', error);
            throw error;
        });
}
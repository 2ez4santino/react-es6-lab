import React, { useState, useEffect } from 'react';

function UserAPI() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            // Fetching data from a placeholder API
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data); // Updating state with API data
        }
        fetchUsers();
    }, []); // Empty array means this runs once when the component loads

    return (
        <div>
            <h2>Users from API:</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserAPI;
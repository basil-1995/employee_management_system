import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/config';

export default function Login() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('accounts/login/', credentials);
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            window.location.href = '/';
        } catch (error) {
            if (error.response && error.response.data) {
                const errorMsg = error.response.data.detail || JSON.stringify(error.response.data);
                setError(errorMsg);
            } else {
                setError("Network error or CORS issue blocked the request.");
            }
        }
    };

    return (
        <div className='logincontainer'>
            <h2>Login Form</h2>
            {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>

                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password: </label>


                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

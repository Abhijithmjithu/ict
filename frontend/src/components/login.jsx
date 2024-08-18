import React, { useState } from 'react';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();

            if (response.ok) {
                setSuccess('Login successful');
                setError('');
                localStorage.setItem('token', result.token);
           } else {
                setError(result.message);
                setSuccess('');
            }
        } catch (err) {
            setError('Server error');
            setSuccess('');
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <h2 className="login-heading">Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="username@gmail.com"
                        className="login-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <a href="#" className="forgot-password">Forgot Password</a>
                    <button className="login-button" type="submit">Sign in</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <p className="signup-prompt">Don't have an account yet? <a href="/register">Register for free</a></p>
            </div>
        </div>
    );
}

export default Login;

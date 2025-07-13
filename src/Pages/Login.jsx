import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Login.css'
import { useAuth } from '../Context/AuthContext.jsx';
import axios from 'axios'
import { toast } from 'react-toastify';

function Login() {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: handle login logic

        try {
            const { data } = await axios.post(
                "http://localhost:4000/api/login",
                form,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            setUser(data);
            navigate("/");

        } catch (err) {
            // console.error("Login failed:", err.response?.data?.message || err.message);
           toast.error("Login failed: " + (err.response?.data?.message || "Something went wrong"));
        }
    };

    return (
        <div className="login-container">
            <form className="user-form" onSubmit={handleSubmit}>
                <h2 className="user-title">Sign In</h2>
                <label htmlFor="email">Email <span style={{color: "red"}}>*</span></label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='Email'
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                />
                <label htmlFor="password">Password <span style={{color: "red"}}> *</span> </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder='Password'
                    value={form.password}
                    onChange={handleChange}
                    required
                    autoComplete="current-password"
                />
                <button className="user-btn" type="submit">Login</button>
                <div className="user-switch">
                    Don't have an account?{' '}
                    <span className="user-link" onClick={() => navigate('/register')}>Sign Up</span>
                </div>
            </form>
        </div>
    )
}

export default Login
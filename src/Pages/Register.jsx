import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Login.css'
import axios from 'axios'
import { toast } from 'react-toastify';

function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: '',
        email: '',
        avatar: '',
        password: ''
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = form.username.trim();
        const email = form.email.trim();
        const password = form.password.trim();
        let avatar = form.avatar.trim();

        // Validate required fields
        if (!username || !email || !password) {
            alert("Please fill all required fields without empty space.");
            return;
        }

        // Auto-generate avatar if blank
        if (!avatar) {
            const initial = username.charAt(0).toUpperCase();
            avatar = `https://placehold.co/40x40.png?text=${initial}`;
        }

        try {
            const { data } = await axios.post(
                "http://localhost:4000/api/register",
                { username, email, avatar, password },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            toast.success("✅ User registered successfully, Please LogIn your Account.");
            navigate("/login");

        } catch (err) {
            // console.error(" Registration failed:", err.response?.data?.message || err.message);
            toast.error("Registration failed: " + (err.response?.data?.message || "Something went wrong"));
        }
    };

    return (
        <div className="login-container">
            <form className="user-form" onSubmit={handleSubmit}>
                <h2 className="user-title">Create Account</h2>

                <label htmlFor="username">Username <span style={{color: "red"}}> *</span> </label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder='User Name'
                    value={form.username}
                    onChange={handleChange}
                    required
                    autoComplete="username"
                />

                <label htmlFor="email">Email <span style={{color: "red"}}> *</span> </label>
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

                <label htmlFor="avatar">Profile Picture URL</label>
                <input
                    id="avatar"
                    name="avatar"
                    type="url"
                    placeholder='Profile Pic URL'
                    value={form.avatar}
                    onChange={handleChange}
                    autoComplete="photo"
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
                    autoComplete="new-password"
                />

                <button className="user-btn" type="submit">Register</button>

                <div className="user-switch">
                    Already have an account?{' '}
                    <span className="user-link" onClick={() => navigate('/login')}>Sign In</span>
                </div>
            </form>
        </div>
    )
}

export default Register
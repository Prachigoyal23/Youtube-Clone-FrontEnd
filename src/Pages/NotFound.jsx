import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NotFound.css';

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="notfound-home-btn">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

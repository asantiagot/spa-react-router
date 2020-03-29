import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="container">
        <h1>Home page</h1>
            <Link to="/asantiagot">
                asantiagot
            </Link> on Github.
        </div>
    )
}
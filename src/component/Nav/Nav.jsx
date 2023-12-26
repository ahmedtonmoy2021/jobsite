import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div className='grid gap-4'>
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/appliedjobs">AppliedJobs</Link>
            <button>Log in</button>
            
        </div>
    );
};

export default Nav;
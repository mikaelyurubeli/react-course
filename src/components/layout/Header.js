import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const linkStyle = {
    color: "#fff"
}

export default Header;
import React from 'react';
import { Link } from "react-router-dom"

function HeaderPart() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/" className="nav__link">Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/Contact" className="nav__link">Contact</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/BookTable" className="nav__link">BookTable</Link>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default HeaderPart;

import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'

const Header = ({ ToggleMenu, menuOpen }) => {
    return (
        <header>
            <section className="header-section">
                <div></div>
                <Link to='/'>
                    <h1>
                        <span className="Brytr">Brytr</span> <span className="kit">Kit</span
                        ><span className="chen">chen</span>
                    </h1>
                </Link>
                <button className="menuBtn" onClick={ToggleMenu}>
                    <div className='hamburger-menu'></div>
                </button>
            </section>

            {menuOpen &&
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/menu.html">Our Menu</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </nav>
            }
        </header>
    )
}

export default Header

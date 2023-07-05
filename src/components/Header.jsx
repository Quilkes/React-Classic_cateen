import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBowlFood } from '@fortawesome/free-solid-svg-icons'
import '../css/Header.css'

const Header = ({ ToggleMenu, menuOpen }) => {
    return (
        <header>
            <section className="header-section">
                <div className='font-img-login'>
                    <Link to='/login'>
                        <FontAwesomeIcon
                            icon={faBowlFood}
                            className='user-login'
                        />
                    </Link>
                </div>
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
                    <ul onClick={ToggleMenu}>
                        <Link to='/'>Home</Link>
                        <Link to='/menu'>Our Menu</Link>
                        <Link to='/contact'>Contact Us</Link>
                        <Link to='/about'>About Us</Link>
                    </ul>
                </nav>
            }
        </header>
    )
}

export default Header

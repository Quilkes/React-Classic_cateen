import { useContext } from 'react'
import DataContext from '../context/DataContext'
import { Link } from 'react-router-dom'
import loginPNG from '../img/chef-hat_01.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBowlFood } from '@fortawesome/free-solid-svg-icons'
import '../css/Header.css'

const Header = () => {

    const { ToggleMenu, menuOpen } = useContext(DataContext);
    
    return (
        <header>
            <section className="header-section">
                <div className='font-img-login'>
                    <Link to='/login' className='font-img-login-link'>
                        <img
                            src={loginPNG}
                             className='user-login'
                            height='37'
                            width='40'
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
                        <Link to='/contact'>Order Online</Link>
                        <Link to='/about'>Promotion</Link>
                        <Link to='/about'>Delivery areas</Link>
                        <Link to='/about'>Cart</Link>
                        <Link to='/about'>About Us</Link>
                        <Link to='/about'>Contact Us</Link>
                        <Link to='/about'>FAQ</Link>
                    </ul>
                </nav>
            }
        </header>
    )
}

export default Header

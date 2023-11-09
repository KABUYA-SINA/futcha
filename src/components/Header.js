import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import '../sass/layout/_header.scss';
import '../sass/base/_header-typo.scss';

const Header = () => {
    const [nav, setNav] = useState(false)

    function handleClick() {
        setNav(!nav)
    }

    return (
        <header id='heading' className='heading-page'>
            <Link to='/' className="logo">
                <h1>Futcha</h1>
            </Link>
            <nav className={nav ? 'navigation active' : 'navigation'}>
                <ul>
                    <li className='nav-first'>
                        <NavLink
                            href='../pages/Future.js'
                            to="/future"
                            className={(nav) => (nav.isActive ? 'nav-active' : '')}
                        >
                            Future
                        </NavLink>
                    </li>
                    <li className='nav-second'>
                        <NavLink
                            href='../pages/About.js'
                            to="/about"
                            className={(nav) => (nav.isActive ? 'nav-active' : '')}
                        >
                            About us
                        </NavLink>
                    </li>
                    <li className='nav-third'>
                        <NavLink
                            href='../pages/Contact.js'
                            to='/contact'
                            className={(nav) => (nav.isActive ? 'nav-active' : '')}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className='toggle' onClick={handleClick}>
                {nav ? (<FaTimes size={20} style={{ color: '#f8f8f8' }} />) : (<FaBars size={20} style={{ color: '#f8f8f8' }} />)}
            </div>
        </header>
    )
}

export default Header
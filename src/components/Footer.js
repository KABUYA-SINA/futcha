import React from 'react'
import { Link } from 'react-router-dom';
import '../sass/base/_footer-typo.scss';
import '../sass/layout/_footer.scss';

const Footer = () => {
    return (
        <footer className='foot-pages'>
            <p>KrisCartel House 🏰 © - 2023 | All Rights Reserved </p>
            <Link
                to='https://github.com/KABUYA-SINA'
                className='btn-link'
                target='_blank'
                rel='noreferrer'
            >
                <button
                    type='button'
                    className='btn'
                >
                    github
                </button>
            </Link>
        </footer>
    )
}

export default Footer
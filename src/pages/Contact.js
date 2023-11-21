import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../sass/base/_base.scss';
import '../sass/base/_font.scss';
import '../sass/layout/_container.scss';

const Contact = () => {
    return (
        <div className='container'>
            <Header />
            <Footer />
        </div>
    )
}

export default Contact;
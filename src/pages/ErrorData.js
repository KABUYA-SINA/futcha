import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../sass/pages/_error.scss';

function ErrorData() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }
    return (
        <motion.main
            className='error'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: .3 } }}
            exit={{ opacity: 0 }}
        >
            <h1>500</h1>
            <p>
                Oups! Something went wrong with the server.
            </p>
            <Link to='/' onClick={handleClick}>
                <span className='btn-error'> Please return to Home page</span>
            </Link>
        </motion.main>
    )
};

export default ErrorData;
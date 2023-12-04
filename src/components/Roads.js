import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Future from '../pages/Future';

const Roads = () => {
    return (
        <AnimatePresence >
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/future" element={<Future />} />
                <Route path='*' element={<Error />} />

                <Route path="/futcha" element={<Home />} />
                <Route path='/futcha/about' element={<About />} />
                <Route path="/futcha/contact" element={<Contact />} />
                <Route path="/futcha/future" element={<Future />} />
                <Route path='/futcha/*' element={<Error />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Roads;
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DataImages from '../data/Images';
import ErrorData from './ErrorData';
import Loading from '../components/Loader';
import { ErrorBoundary } from 'react-error-boundary';
import Cards from '../components/Cards';
import CardText from '../components/CardText';
import { motion } from "framer-motion";
import '../sass/base/_base.scss';
import '../sass/base/_font.scss';
import '../sass/layout/_container.scss';
import '../sass/pages/_home.scss';
const Home = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        setData(DataImages)
        setIsLoading(false)
    }, [])

    const imagesHome = Object.values(data);
    const firstElement = imagesHome.slice(0, 2);
    const secondElement = imagesHome.slice(2, 8)
    const thirdElement = imagesHome.slice(8, 14)
    const lastElement = imagesHome.slice(-3)

    return (
        <motion.div
            className='container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: .5 } }}
            exit={{ opacity: 0 }}
        >
            <Header />
            <main className='middle'>
                <ErrorBoundary FallbackComponent={ErrorData} onReset={() => { }}>
                    {isLoading ?
                        (<Loading data-tested='loader' />)
                        :
                        <div className="all-boxes">
                            <div className="first-box">
                                {
                                    firstElement.map(({ id, cover, title, alt, source, text }) => (
                                        <article key={id} className='first-article'>
                                            <Cards id={id} cover={cover} alt={alt} title={title} text={text} source={source} />
                                        </article>
                                    ))
                                }
                            </div>
                            <div className="second-box">
                                {
                                    secondElement.map(({ id, cover, title, alt, source, text }) => (
                                        <article key={id} className='second-article'>
                                            <Cards id={id} cover={cover} alt={alt} title={title} text={text} source={source} />
                                        </article>
                                    ))
                                }
                                {
                                    thirdElement.map(({ id, title, text, source }) => (
                                        <article key={id} className='second-article'>
                                            <CardText title={title} text={text} source={source} />
                                        </article>
                                    ))
                                }
                            </div>
                            <aside className="third-box">
                                {
                                    lastElement.map(({ id, cover, title, alt, source, text }) => (
                                        <article key={id} className='third-article'>
                                            <Cards id={id} cover={cover} alt={alt} title={title} text={text} source={source} />
                                        </article>
                                    ))
                                }
                            </aside>
                        </div>
                    }
                </ErrorBoundary>
            </main>
            <Footer />
        </motion.div>
    )
}
export default Home;
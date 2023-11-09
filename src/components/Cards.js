import React from 'react';
import Collapse from './Collapse';
import '../sass/pages/_cards.scss'

const Cards = ({ id, cover, title, alt, source, text }) => {
    return (
        <div key={id} className="card">
            <img src={cover} alt={alt} />
            <Collapse title={title} text={text} source={source} />
        </div>
    )
}

export default Cards;
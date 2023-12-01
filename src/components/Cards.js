import React, { useState, useEffect } from 'react';
import Collapse from './Collapse';
import '../sass/pages/_cards.scss'

const Cards = ({ id, cover, title, alt, source, text }) => {
    const [imgAppear, setImgAppear] = useState('')
    const empty = cover ? <img src={cover} alt={alt} /> : ''

    useEffect(() => {
        setImgAppear(true)
    }, [])

    return (
        <div key={id} className="card">
            {imgAppear && empty}
            <Collapse title={title} text={text} source={source} />
        </div>
    )
}

export default Cards;
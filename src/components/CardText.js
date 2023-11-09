import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/pages/_cardtext.scss';

const CardText = ({ id, title, source, text }) => {
    return (
        <div key={id} className="cards">
            <h2 className="text-cards">{title}</h2>
            <p className='all-texts'>{text}</p>
            <Link
                to={source}
                className='text-cards--link'
            >
                <button type='button' className='text-btn'>
                    Read More
                </button>
            </Link>
        </div>
    )
}

export default CardText;
import React from 'react';
import './card.style.css';

export const Card = ({monster}) => {
    return (
        <div className='card'>
            <div>
                <img alt='monster' src={`https://robohash.org/${monster.id}?set=set2`} />
                <h1>{monster.username}</h1>
                <p>{monster.email}</p>
            </div>
        </div>
    )
}
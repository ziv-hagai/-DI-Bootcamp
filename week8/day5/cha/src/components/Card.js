import React from 'react';

const Card = ({ name, image, occupation, id, handleClick }) => {
    return (
        <div id={id} onClick={handleClick} className='card tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt='heros' src={image} />
            <div>
                <h2>{name}</h2>
                <p>{occupation}</p>
            </div>
        </div>
    );
}

export default Card;
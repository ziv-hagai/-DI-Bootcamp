import React from 'react';
import Card from './Card';

const CardList = ({ heros }) => {
    return (
        <div>
            {
                heros.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            clicked={heros[i].clicked}
                            id={heros[i].id}
                            name={heros[i].name}
                            occupation={heros[i].occupation}
                            image={heros[i].image}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;
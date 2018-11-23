import React from 'react';
import Card from './Card';
import './CardsContainer.css';

const CardsContainer = ({contacts}) => {
    const contactComponent = contacts.map((contact, i) => {
        const degree = 250 + 160 * Math.random();
        return <Card img={contacts[i].img} name={contacts[i].name} email={contacts[i].email} key={i} degree={`hue-rotate(${degree}deg)`}/>
    });
    return (
        <div className='cardsContainer'>
            {contactComponent}
        </div>
    );
}

export default CardsContainer;
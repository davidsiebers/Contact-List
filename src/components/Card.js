import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        let img = '/images/dinah.jpg';
        let style = {filter: this.props.degree};
        if(this.props.img !== '') {
            img = this.props.img;
            style = {filter: 'none'};
        }
        return (
            <div className='card'>
                <div className='card_top'>
                    <img alt='someNiceImg' src={img} style={style}/>
                </div>
                <div className='card_bottom'>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default Card;


const cardsArr = Array.prototype.slice.call(document.querySelectorAll('.card img'));
    cardsArr.forEach(e => {
        const degree = 360 * Math.random();
        e.style.filter = 'hue-rotate(' + degree + 'deg)';
    });
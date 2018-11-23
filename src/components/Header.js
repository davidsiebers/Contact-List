import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>Contactlist</h1>
                <p>Hello {this.props.user}, these are your contacts</p>
            </div>
        );
    }
}

export default Header;
import React, { PureComponent } from 'react';
import './AddPopup.css';
import * as contacts from '../contacts';

class AddPopup extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        }
    }

    updateName = (e) => {
        this.setState({ name: e.target.value });
    }

    updateEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    saveContact = () => {
        contacts.contacts.push({img: "", name: this.state.name, email: this.state.email, key: contacts.contacts[contacts.contacts.length - 1].key + 1});
    }

    render() {
        let show = 'none';
        if(this.props.show === true) {
            show = 'block';
        }
        return (
            <div className='add_popup' style={{display: show}}>
                <div className='add_popup-overlay' onClick={() =>  this.props.closePopup() }></div>
                <div className='add_popup-popup'>
                    <div className='add_popup-close' onClick={() =>  this.props.closePopup() }><img src='/images/add.svg' alt='add' /></div>
                    <h3>Add a new contact</h3>
                    <input className='add_name' onChange={ this.updateName } type='text' placeholder='name' />
                    <input className='add_email' onChange={ this.updateEmail } type='text' placeholder='email' />
                    <a>Upload image</a>
                    <div className='add_button' onClick={() =>  { this.props.closePopup(); this.saveContact() } }>Save contact</div>
                </div>
            </div>
        );
    }
}

export default AddPopup;
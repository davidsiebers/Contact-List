import React, { PureComponent } from 'react';
import './Add.css';

class Add extends PureComponent {
    render() {
        return (
            <div className='add' onClick={() =>  this.props.addPopup() }>
                <img src='/images/add.svg' alt='add' />
            </div>
        );
    }
}

export default Add;
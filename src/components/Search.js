import React, { PureComponent } from 'react';
import './Search.css';

class Search extends PureComponent {
    render() {
        return (
            <div className='search'>
                <input onChange={(e) =>  this.props.doSearch(e.target.value) }type='search' placeholder='search contacts' />
            </div>
        );
    }
}

export default Search;
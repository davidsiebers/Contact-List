import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Add from '../components/Add.js';
import Search from '../components/Search';
import AddPopup from '../components/AddPopup.js';
import Scroll from '../components/Scroll';
import CardsContainer from '../components/CardsContainer';


/**
 * 1. App update nog wanneer je een contact toevoegd
 *      2. Unieke ID instellen die niet gelijk is aan de voornaam (kan hetzelfde zijn)
 * 3. Node.js server opzetten
 * 4. Toegevoegde contacten toevoegen aan aan de Node server
 * 5. Contact verwijderen
 * 6. Responsive maken
 * 7. Enter key is ook Save contact
 * 8. Je kan een afbeelding als file toevoegen wanneer je een nieuw contact aanmaakt
 */


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: '',
            contacts: this.props.contacts,
            showAddPopup: false
        };
    }

    addPopup = () => {
        this.setState({ showAddPopup: true });
    }

    closePopup = () => {
        this.setState({ showAddPopup: false });
    }

    doSearch = (input) => {
        this.setState({ searchResult: input });
    }

    render() {
        const filterContacts = this.state.contacts.filter(contact => {
            return contact.name.toLowerCase().includes(this.state.searchResult.toLowerCase());
        });
        return (
            <div className='app'>
                <Header user={this.props.user} />
                <div className='menuBar'>
                    <Add addPopup={this.addPopup} />
                    <Search doSearch={this.doSearch} />
                </div>
                <AddPopup closePopup={this.closePopup} show={this.state.showAddPopup}/>
                <Scroll>
                    <CardsContainer contacts={filterContacts} />
                </Scroll>
                <p className='author'>By Dinah Siebers</p>
            </div>
        );
    }
}

export default App;
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '../../App.css'
import "../Contacts.css"


function Contacts()
{
    const [query, setQuery] = useState({
        text: "",
    });

    const [state, setState] = useState({
        loading : false,
        contacts : [],
        contactsFiltered : [],
        errorMessage : ""
    });
    useEffect (() => {
        try {
            setState({...state, loading: true})
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setState({...state, loading: false, contacts: json, contactsFiltered: json}))
            
        } catch (error) {
            setState({...state, loading: false, errorMessage: error.message})
        }
      }, []);

      var {loading, contacts, contactsFiltered, errorMessage} = state;

      var searchContacts = (event) =>
{
   setQuery({
       ...query, text: event.target.value
   });
   var filtered = state.contacts.filter(contact => {
       return contact.name.toLowerCase().includes(event.target.value.toLowerCase())
   });
   setState({
    ...state,
    contactsFiltered: filtered
   });
};


    return (
    <>
    <h1> Real world problem </h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                {
                     contactsFiltered.length > 0 && contactsFiltered.map(contact => {
                        return(
                            <li className="cards__item" key={contact.id}>
                            <Link className="cards__item__link" to={`/ViewContact/${contact.id}`}>
                            <figure className="cards__item__pic-wrap">
                                <img className="photo" src="images/PinClipart.com_fire-truck-ladder-clipart_841840.png" alt="Travel Image" />
                            </figure>
                            <ul className="cards__item__info">
                                            <li className="cards__item__text">
                                                Name : <span className="fw-bold"> {contact.name} </span>
                                            </li>
                                            <li className="cards__item__text">
                                                Email : <span className="fw-bold"> {contact.email} </span>
                                            </li>
                                            <li className="cards__item__text">
                                                Phone : <span className="fw-bold"> {contact.phone} </span>
                                            </li>
                            </ul>
                            </Link>
                        </li>
                           )
                       })
}
                </ul>
            </div>
        </div>
    </>
    )
    
};

export default Contacts

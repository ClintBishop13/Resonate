import React, {useState, useEffect} from 'react';
import '../../App.css'
import { Link, useParams } from 'react-router-dom'
import "../Contacts.css"

function ViewContact() {
    var {contactId} = useParams();

    const [state, setState] = useState({
        loading : false,
        contact : {},
        address : {},
        location : {},
        company : {},
        errorMessage : ""
    });
    useEffect (async () => {
        try {
            setState({...state, loading: true})
            fetch(`https://jsonplaceholder.typicode.com/users/${contactId}`)
            .then(response => response.json())
            .then(json => setState({...state, loading: false, contact: json, address: json.address, location: json.address.geo, company: json.company}))
            
        } catch (error) {
            setState({...state, loading: false, errorMessage: error.message})
        }
      }, [contactId]);

      var {loading, contact, address, location, company, errorMessage} = state;


  return (
      
      <>
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
                                            <li className="cards__item__text">
                                                Username : <span className="fw-bold"> {contact.username} </span>
                                            </li>
                                            <li className="cards__item__text">
                                                <h3>Address</h3>
                                                <ul className="cards__item__info">
                                                <li className="cards__item__text">
                                                Street : <span className="fw-bold"> {address.street} </span>
                                            </li>
                                            <li className="cards__item__text">
                                                Suite : <span className="fw-bold"> {address.suite} </span>
                                            </li>
                                            <li className="cards__item__text">
                                                City : <span className="fw-bold"> {address.city} </span>
                                            </li>
                                            <li className="cards__item__text">
                                                Zipcode : <span className="fw-bold"> {address.zipcode} </span>
                                            </li>
                                            <li className="cards__item__text">
                                            Location : <span className="fw-bold"> {location.lat}:{location.lng} </span>
                                                </li>
                                                </ul>
                                            </li>
                                            <li className="cards__item__text">
                                                Website : <span className="fw-bold"> {contact.phone} </span>
                                            </li>
                                            <li className="cards__item__text">
                                                <h3>Company</h3>
                                                <span>{company.name}: {company.catchPhrase}. {company.bs}</span>
                                                <span></span>
                                            </li>
                            </ul>
    </>
  )
}

export default ViewContact

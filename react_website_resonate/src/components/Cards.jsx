import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
        <h1>Check out the Questions via the following cards!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="images/shopping-cart.png"
                    text="Methods for generating and decoding this unique code that will be printed on the docket."
                    label = 'Q1 - Level 200'
                    path = '/Level200'
                    />
                     <CardItem 
                    src="images/PinClipart.com_fire-truck-ladder-clipart_841840.png"
                    text="A responsive “Contacts” application that allows the user to browse their contacts."
                    label = 'Q2 - Real world problem - Contacts'
                    path = '/contacts'
                    />
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Cards
import React, { Component } from "react";
import './ContactView.css'
import { ContactItems } from "./ContactItems";
import ContactItemView from "./ContactItemView/ContactItemView";
class ContactView extends Component {
    
    render() {
        return(
            <div className="ContactView" id="contact">
                <h2 className="contact-heading slide-in">Contact</h2>
                <div className="contact-wrapper">
                    {ContactItems.map((item, index) => {
                        return (
                            <ContactItemView key={index} item={item}></ContactItemView>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default ContactView;
import React, { Component } from "react";
import './ContactItemView.css'
class ContactItemView extends Component {
    render() {
        return (
            <a className="ContactItemView" href={this.props.item.href} target='_blank'>
                <i className={`${this.props.item.itemImage} contact-image`}></i>
                <div className="contact-text">{this.props.item.name}</div>
                <i className={`${this.props.item.typeImage} contact-image`}></i>
            </a>
        );
    }
}

export default ContactItemView;
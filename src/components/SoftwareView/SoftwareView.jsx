import React, { Component } from "react";
import './SoftwareView.css'
import { SoftwareItems } from "./SoftwareItems";
class SoftwareView extends Component {
    
    render() {
        return(
            <div className="SoftwareViewItems" id="software">
                <h2 className="sub-headings slide-in">Software and Tools</h2>
                <div className="software-wrapper">
                    {SoftwareItems.map((item, index) => {
                        return (
                            <div key={index} className="experience fade-in">
                                <div className="experience-logo">
                                    <img src={require(`./img/${item.image}`)} alt=""></img>
                                </div>
                                <div className="experience-text">
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default SoftwareView;
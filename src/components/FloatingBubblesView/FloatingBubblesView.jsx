import React, { Component } from "react";
import './FloatingBubblesView.css'
class FloatingBubblesView extends Component {
    
    render() {
        return(
            <div className="blobsArea">
                <ul className="blobs">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        );
    }
}

export default FloatingBubblesView;
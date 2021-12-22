import React, { Component } from "react";
import './LandingView.css';
import { LandingViewTexts } from "./LandingViewTexts";
class LandingView extends Component {
    
    render() {
        return(
            <div className="LandingViewItems">
                <div className="hello-im-parth">
                    <h2 className="big-text-hello">{LandingViewTexts.line1}</h2>
                    <h1 className="big-text-im-parth">{LandingViewTexts.line2}</h1>
                    <p className="big-text-cs-student">{LandingViewTexts.line3}</p>
                </div>
            </div>
        );
    }
}

export default LandingView;
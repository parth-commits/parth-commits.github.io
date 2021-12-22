import React, { Component } from "react";
import './AwardView.css'
import { AwardItems } from "./AwardItems";
import AwardItemView from "./AwardItemView/AwardItemView";
class AwardView extends Component {
    

    render() {
        return(
            <div className="AwardView" id="awards">
                <h2 className="sub-headings slide-in">Awards</h2>
                <div className="award-wrapper">
                    {AwardItems.map((item, index) => {
                        return (
                            <AwardItemView key={index} item={item}></AwardItemView>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default AwardView;
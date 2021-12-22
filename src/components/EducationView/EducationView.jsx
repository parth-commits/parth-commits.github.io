import React, { Component } from "react";
import './EducationView.css'
import EducationItemView from "./EducationItemView/EducationItemView";
import { EducationItems } from "./EducationItems";
class EducationView extends Component {
    
    render() {
        return(
            <div className="EducationViewItems" id="education">
                <h2 className="sub-headings slide-in">Education</h2>
                <div className="education-wrapper">
                    {EducationItems.map((item, index) => {
                        return (
                            <EducationItemView key={index} item={item}></EducationItemView>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default EducationView;
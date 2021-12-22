import React, { Component } from "react";
import './TimelineView.css'
import TimelineItemView from "./TimelineItemView/TimelineItemView";
import { TimelineItems } from "./TimelineItems";
class TimelineView extends Component {
    
    render() {
        return(
            <div className="TimelineViewItems" id="timeline">
                <h2 className="sub-headings slide-in">My Timeline</h2>
                <div className="timeline-wrapper">
                    {TimelineItems.map((item, index) => {
                        return (
                            <TimelineItemView key={index} item={item}></TimelineItemView>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default TimelineView;
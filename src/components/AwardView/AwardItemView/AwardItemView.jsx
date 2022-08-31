import React, { Component } from "react";
import './AwardItemView.css'
class AwardItemView extends Component {
    state = { open: this.props.item.isExpanded }

    handleClick = () => {
        this.setState({ open: !this.state.open })
    }
    render() {
        return(
            <div className="award-item fade-in">
                <label className={`award-item-title ${this.state.open ? 'award-content-open' : 'award-content-closed'}`} onClick={this.handleClick}>
                    <h3 className="award-item-title-title"><i className={`fas fa-caret-right ${this.state.open ? 'award-caret-open' : 'award-caret-closed'}`}></i>{this.props.item.awardName}</h3>
                    <p className="award-item-title-date">{this.props.item.time}</p>
                </label>
                <div className={`award-item-content ${this.state.open ? 'award-content-open' : 'award-content-closed'}`}>
                    <ul>
                        {this.props.item.descriptionItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    {item.title}
                                    <ul>
                                        {item.sublist.map((item1, index1) => {
                                            return (
                                                <li key={index1}>{item1}</li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default AwardItemView;
import React, { Component } from "react";
import './EducationItemView.css'
class EducationItemView extends Component {
    state = { open: this.props.item.isExpanded }

    handleClick = () => {
        this.setState({ open: !this.state.open })
    }
    render() {
        return(
            <div className="education-item fade-in">
                <label className={`education-item-title ${this.state.open ? 'education-content-open' : 'education-content-closed'}`} onClick={this.handleClick}>
                    <h3 className="education-item-title-title"><i className={`fas fa-caret-right ${this.state.open ? 'education-caret-open' : 'education-caret-closed'}`}></i>{this.props.item.educationName}, {this.props.item.schoolName}</h3>
                    <p className="education-item-title-date">{this.props.item.time}</p>
                </label>
                <div className={`education-item-content ${this.state.open ? 'education-content-open' : 'education-content-closed'}`}>
                    <ul>
                        {this.props.item.descriptionItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    {item.title}
                                    <ul>
                                        {item.sublist.map((item1, index1) => {
                                            return (
                                                <li key={index1} dangerouslySetInnerHTML={{__html: item1}}></li>
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

export default EducationItemView;
import React, { Component } from "react";
import './ProjectItem.css';

class ProjectItem extends Component {
    

    handleClick = () => {
        this.props.handleModalClick(this.props.item);
    }
    render() {
        return(
            <div className="project-item fade-in" onClick={this.handleClick}>
                <div className="project-item-logo">
                    <img src={require(`../img/${this.props.item.logo}`)} alt=""></img>
                </div>
                <div className="project-item-text">
                    <div className="project-item-text-div">
                        {this.props.item.name}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectItem;
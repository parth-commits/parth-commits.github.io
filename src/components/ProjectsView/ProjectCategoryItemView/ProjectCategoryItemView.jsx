import React, { Component } from "react";
import './ProjectCategoryItemView.css'
import { ProjectItems } from "../ProjectItems";
import ProjectItem from "./ProjectItem/ProjectItem";
class ProjectCategoryItemView extends Component {
    state = { open: this.props.item.isExpanded }
    handleClick = () => {
        this.setState({ open: !this.state.open })
    }
    render() {
        return(
            <div className="project-category-item fade-in">
                <label className={`project-category-item-title ${this.state.open ? 'project-category-content-open' : 'project-category-content-closed'}`} onClick={this.handleClick}>
                    <h3 className="project-category-item-title-title"><i className={`fas fa-caret-right ${this.state.open ? 'project-category-caret-open' : 'project-category-caret-closed'}`}></i><img src={require(`./img/${this.props.item.icon}`)} alt="" />   {this.props.item.name}</h3>
                </label>
                <div className={`project-category-item-content ${this.state.open ? 'project-category-content-open' : 'project-category-content-closed'}`}>
                    {ProjectItems[this.props.item.variable].map((item, index) => {
                        return (
                            <ProjectItem key={index} item={item} handleModalClick={this.props.handleModalClick}></ProjectItem>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default ProjectCategoryItemView;
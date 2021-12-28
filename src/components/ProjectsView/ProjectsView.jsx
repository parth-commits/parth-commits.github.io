import React, { Component } from "react";
import './ProjectsView.css';
import { ProjectCategoryItems } from "./ProjectCategoryItems";
import ProjectCategoryItemView from "./ProjectCategoryItemView/ProjectCategoryItemView";
import ModalView from "../ModalView/ModalView";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


class ProjectsView extends Component {
    targetElement = null;
    state = { isModalOpen: false, modalContent: {
        name: 'COVID-19 Live Data App which is a really long name',
        time: 'August 2020',
        logo: 'sb-wApp.png',
        descriptionItems: [
            'this is a temporary test message, will be populated with real data later',
        ],
    } }

    handleModalClick = (item) => {
        console.warn('modal clicked');
        if (!this.state.isModalOpen) {
            disableBodyScroll(document.querySelector('#my-modal'));
        } else {
            enableBodyScroll(document.querySelector('#my-modal'));
        }
        this.setState({ isModalOpen: !this.state.isModalOpen });
        if (item) {
            this.setState({ modalContent: item });
        }
    }

    componentWillUnmount() {
        // clears all scroll locks if any
        clearAllBodyScrollLocks();
    }

    render() {
        return(
            <div className="ProjectView" id="projects">
                <h2 className="sub-headings slide-in">Projects</h2>
                <div className="projects-wrapper">
                    {ProjectCategoryItems.map((item, index) => {
                            return (
                                <ProjectCategoryItemView key={index} item={item} handleModalClick={this.handleModalClick}></ProjectCategoryItemView>
                            )
                        }
                    )}
                </div>
                <ModalView key={new Date().getTime()} state={this.state} handleModalClick={this.handleModalClick}></ModalView>
            </div>
        );
    }
}

export default ProjectsView;
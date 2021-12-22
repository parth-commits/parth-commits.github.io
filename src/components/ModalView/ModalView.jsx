import React, { Component } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';

import './ModalView.css';

class ModalView extends Component {


    handleClick = () => {
        this.props.handleModalClick();
    }
    notclick = (e) => {
        // do nothing
        console.warn(window.innerWidth);
        e.stopPropagation();
    }

    render() {
        return(
            <div id="my-modal" className={`ModalView ${this.props.state.isModalOpen ? 'modal-is-open' : 'modal-is-closed'}`} onClick={this.handleClick}>
                <Scrollbars style={{ width: '400px', height: '80vh' }} className="modal-wrapper" onClick={this.notclick}>
                    <div className="modal-logo">
                        <i className="close-button fas fa-times" onClick={this.handleClick}></i>
                        <img src={require(`../ProjectsView/ProjectCategoryItemView/img/${this.props.state.modalContent.logo}`)} alt=""></img>
                    </div>
                    <div className="modal-content-wrapper">
                        <h2 className="modal-title">{this.props.state.modalContent.name}</h2>
                        <p className="modal-time">{this.props.state.modalContent.time}</p>
                        <ul className="modal-contents">
                            {this.props.state.modalContent.descriptionItems.map((item, index) => {
                                return (
                                    <li key={index} dangerouslySetInnerHTML={{__html: item}}>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </Scrollbars>
            </div>
        );
    }
}

export default ModalView;
/**

 style={{ width: '400px', height: '90vh' }}
                <div className="modal-wrapper" onClick={this.notclick}>
                    <div className="modal-logo">
                        <i className="close-button fas fa-times" onClick={this.handleClick}></i>
                        <img src={require(`../ProjectsView/ProjectCategoryItemView/img/${this.props.state.modalContent.logo}`)} alt=""></img>
                    </div>
                    <div className="modal-content-wrapper">
                        <h2 className="modal-title">{this.props.state.modalContent.name}</h2>
                        <p className="modal-time">{this.props.state.modalContent.time}</p>
                        <ul className="modal-contents">
                            {this.props.state.modalContent.descriptionItems.map((item, index) => {
                                return (
                                    <li key={index} dangerouslySetInnerHTML={{__html: item}}>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

 */
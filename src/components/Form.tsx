import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface Props {
    handleChange: (change: number) => void,
}


export default class Form extends Component<Props> {

    state = {
        paragraphs: 0,
        wordsToInclude: []
    }

    handleChange = (change: number) => {
        if (this.state.paragraphs + change >= 0) {
            this.setState({paragraphs: this.state.paragraphs + change});
            this.props.handleChange(this.state.paragraphs + change);
        }
    }

    render() {
        return (
            <div className="numberOfParagraphs">
                <div>
                    <p>{this.state.paragraphs}</p>
                    <div className="arrowDiv">
                        <FontAwesomeIcon icon={faChevronUp} size="lg" onClick={() => {this.handleChange(1)}} />
                        <FontAwesomeIcon icon={faChevronDown} size="lg"  onClick={() => {this.handleChange(-1)}}  />
                    </div>
                </div>
                <p>Paragraphs</p>
            </div>
        )
    }
}

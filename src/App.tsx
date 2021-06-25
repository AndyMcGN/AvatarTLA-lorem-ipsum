import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import TextGenerator from './components/TextGenerator';
import React, { Component } from 'react';
import './components/stylesheets/styles.css';
import avatarLogo from './avatar-logo.png'

interface State {
  paragraphs: number;
}


export default class App extends Component {

  state = {
    paragraphs: 0,
  }

  handleChange = (change: number): void => {
    this.setState({
        paragraphs: change,
    })
}

  render() {
    return (
      <div className="App">
        <div>
          <div className='header'>
            <div>
              <img src={avatarLogo} /> 
              <h2>Lorem Ipsum Generator</h2>
              <h4>Lorem Ipsum generated from random avatar phrases.</h4>
            </div>
            <Form handleChange={this.handleChange} />
          </div>
          <TextGenerator paragraphs={this.state.paragraphs} />
          </div>          
        </div>
        
    );
  }
}
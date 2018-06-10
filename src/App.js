import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import CutForm from './components/CutForm';
import CutResult from './components/CutResult';

class App extends Component {
  state = {
    form: {
      text: '',
      shuffle: true,
      reverse: false,
      chunkSize: 3
    },
    results: null,
  }
  handleTextareaChange = (e) => {
    const form = {...this.state.form};
    form['text'] = e.target.value;
    this.setState({
      form
    });
  }
  render() {
    let { form, results } = this.state;
    return (
      <Fragment>
        <Header title="Cut-Ups!"/>
        <CutForm 
          {...form} 
          handleTextareaChange={this.handleTextareaChange}
        />
        <CutResult 
          // text={results ? results : 'nothing to see here'}
          text={this.state.form.text}
        />
      </Fragment>
    );
  }
}

export default App;

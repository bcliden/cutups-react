import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Container, Message, Icon } from 'semantic-ui-react';
import CutForm from './components/CutForm';
import { pipe, splitText, reverseCut, chunkCut, shuffleCut} from './helpers/cutups.js';

class App extends Component {
  state = {
    form: {
      text: '',
      shuffle: true,
      reverse: true,
      chunkSize: '3'
    },
    results: '',
  }
  handleChange = (e, { name, value, checked}) => {
    const form = {...this.state.form};
    checked 
      ? form[name] = checked
      : form[name] = value;
    this.setState({
      form,
    });
  }
  handleSubmit = (e) => {
    // define order of operations, left to right
  // must reverse before array gets chunked
    let operations = [splitText, reverseCut, chunkCut, shuffleCut];
    let data = {...this.state.form};

    let cutResult = pipe(data, operations).result.join(' ');
    this.setState({ results: cutResult });
  }
  render() {
    let { form } = this.state;
    return (
      <Container
        style={{ padding: '1rem 0'}}>
        <Header 
          icon
          as='h1'
          textAlign="center">
          <Icon name="cut"/>
          Cut-Ups!
        </Header>
        <CutForm 
          {...form} 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Message>
            <Message.Header>Your Results</Message.Header>
            <p>{this.state.results}</p>
        </Message>
      </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Container, Message, Icon } from 'semantic-ui-react';
import CutForm from './components/CutForm';

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
    console.dir(e);
    this.setState({ results: 'dingo ate your baby' });
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

function shuffle(data) {
  if( this.state.form.shuffle ){
      let arrayCopy = data.array.slice();
      // shuffle array using fisher-yates algorithm
      for(let idx1 = arrayCopy.length-1; idx1 > 0; idx1--){
          let idx2 = Math.floor(Math.random()*(idx1+1));
          [arrayCopy[idx1], arrayCopy[idx2]] = [arrayCopy[idx2], arrayCopy[idx1]];
      }
      data.array = arrayCopy;
  }
  return data;
}

export default App;

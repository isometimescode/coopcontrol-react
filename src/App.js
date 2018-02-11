import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import ActionCard from './ActionCard';
import {ErrorMessage, Loading} from './FlashMessage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      door: {id: 1, status: 1, status_name: ["closed", "open"], status_actions: ["close", "open"], start: "2018-02-04T07:30:38-08:00", end: "2018-02-04T17:15:49-08:00"},
      light: {id: 2, status: 0, status_name: ["off", "on"], status_actions: ["turn off", "turn on"], start: "2018-02-04T04:15:49-08:00", end: "2018-02-04T07:30:38-08:00"}
    };
  }

  handleClick(name) {
    let obj = Object.assign({}, this.state[name]);
    obj.status = obj.status === 1 ? 0 : 1;
    this.setState({[name]: obj});
  }

  render() {
    let cards = ['door', 'light'].map( name => {
      var obj = this.state[name];
      return (<ActionCard key={obj.id} name={name} {...obj} onClick={() => this.handleClick(name)}/>);
    });

    return (
      <Container text className="main">
        <ErrorMessage message={this.state.error} />
        <Segment basic>
          <Loading active={!this.state.isLoaded} />
          {cards}
        </Segment>
      </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Container, Card } from 'semantic-ui-react';
import ActionCard from './ActionCard';
import {ErrorMessage} from './FlashMessage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: ['door', 'light']
    };

    for(let name of this.state.items) {
      this.state[name] = {
        error: null,
        isLoaded: false,
        isDisabled: true,
        data: {}
      }
    };
  }

  componentDidMount() {
    for(let name of this.state.items) {
      this.callAPI(name, "/info/" + name + "/");
    };
  }

  componentDidCatch(err, info) {
    this.setState({error: err.toString()});
  }

  callAPI(name, url, data) {
    fetch(process.env.REACT_APP_API_URL + url, data)
      .then(res => {
        if (res.ok) { return res; }
        throw new Error(res.statusText);
      })
      .then(res => res.json())
      .then((result) => {
        this.setState({[name]: {data: result, isLoaded: true, isDisabled: false}});
      })
      .catch((err) => {
        this.setState({[name]: {error: err.toString(), isLoaded: true, isDisabled: true, data: {}}});
      });
  }

  handleClick(name) {
    alert("You clicked " + name);
  }

  render() {
    const cards = this.state.items.map(name => {
      return (<ActionCard key={name} name={name} {...this.state[name]} onClick={() => this.handleClick(name)} />);
    });

    return (
      <Container className='main'>
        <ErrorMessage message={this.state.error} />
        <Card.Group centered doubling stackable>
          {cards}
        </Card.Group>
      </Container>
    );
  }
}

export default App;

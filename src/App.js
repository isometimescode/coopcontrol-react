import React, { Component } from 'react';
import { Segment, Card } from 'semantic-ui-react';
import ActionCard from './ActionCard';
import MainMenu from './MainMenu';
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

  callAPI(name, path, requestdata={}) {
    requestdata['headers'] = {"Accept": "application/json"};
    fetch(
      process.env.REACT_APP_API_URL + path, requestdata)
      .then(res => {
        return res.json().then(data => {
          if (res.ok) {
            return data;
          } else {
            return Promise.reject({status: res.status, data});
          }
        });
      })
      .then(result => {
        this.setState({
          [name]: {data: result, isLoaded: true, isDisabled: false }
        });
      })
      .catch(err => {
        const message = err['data'] && err['data']['message']
          ? err['data'] && err['data']['message']
          : err.toString();

        this.setState({
          [name]: {error: message, isLoaded: true, isDisabled: true, data: {}}
        });
      });
  }

  handleClick(name) {
    const data = this.state[name]['data'];
    this.setState({
      [name]: {error: null, isLoaded: false, isDisabled: false, data: data}
    });

    let formData = new FormData();
    formData.append('status', data['status'] ? 0 : 1);

    this.callAPI(
      name,
      "/update/id/" + this.state[name]['data']['id'] + "/",
      {
        body: formData,
        method: "POST"
      }
    );
  }

  render() {
    const cards = this.state.items.map(name => {
      return (<ActionCard key={name} name={name} {...this.state[name]} onClick={() => this.handleClick(name)} />);
    });

    return (
      <>
        <MainMenu />
        <Segment basic className='main'>
          <ErrorMessage message={this.state.error} />
          <Card.Group centered doubling stackable>
            {cards}
          </Card.Group>
        </Segment>
      </>
    );
  }
}

export default App;

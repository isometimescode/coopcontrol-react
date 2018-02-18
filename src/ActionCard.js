import React, { Component } from 'react';
import { Segment, Icon, Button, Card, Label } from 'semantic-ui-react';
import { ErrorMessage } from './FlashMessage.js';
import './ActionCard.css';

const status_colors = ["red", "green"];

class ActionCard extends Component {
  actionButton(status, next_status_str) {
    const new_status = status ? 0 : 1;

    return(
      <Button color={status_colors[new_status]} onClick={this.props.onClick} disabled={this.props.isDisabled}>
        Toggle {this.props.name + " " + next_status_str.toUpperCase()} <Icon name="arrow right" />
      </Button>
    );
  }

  render() {
    const {
      start = null,
      end = null,
      status = 0,
      status_str = 'unknown',
      next_status_str = 'unknown'
    } = this.props.data

    const error = <ErrorMessage message={this.props.error} header_name={this.props.name} attached='top' />;
    const start_time = new Date(start).toLocaleTimeString();
    const end_time = new Date(end).toLocaleTimeString();

    return(
      <div>
        {error}
        <Segment attached='bottom' loading={!this.props.isLoaded} disabled={this.props.isDisabled}>
          <Card fluid>
            <Card.Content>
              <Card.Header className="capitalize">
                {this.props.name}
              </Card.Header>
              <Card.Meta>
                <Label color={status_colors[status]} size="mini" basic horizontal>
                {status_str.toUpperCase()}
              </Label>
              </Card.Meta>
              <Card.Description>
                Scheduled from {start_time} to {end_time}
              </Card.Description>
            </Card.Content>
            <Card.Content textAlign="right" extra>
              {this.actionButton(status, next_status_str)}
            </Card.Content>
          </Card>
        </Segment>
      </div>
    );
  }
}

export default ActionCard;

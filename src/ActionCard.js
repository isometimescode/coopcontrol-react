import React from 'react';
import { Icon, Button, Card, Label } from 'semantic-ui-react';
import './ActionCard.css';

function ActionCard(props) {
  const start_time = new Date(props.start).toLocaleTimeString("en-US");
  const end_time = new Date(props.end).toLocaleTimeString("en-US");
  const status_colors = ["red", "green"];
  let extra = '';

  if (props.status) {
    extra = (
    <Button color={status_colors[0]} onClick={props.onClick}>
      {props.status_actions[0].toUpperCase() + " " + props.name} <Icon name="arrow right" />
    </Button>
    );
  } else {
    extra = (
      <Button color={status_colors[1]} onClick={props.onClick}>
        {props.status_actions[1].toUpperCase() + " " + props.name} <Icon name="arrow right" />
      </Button>
    );
  }

  return(
    <Card fluid>
      <Card.Content>
        <Card.Header className="capitalize">
          {props.name}
        </Card.Header>
        <Card.Meta>
          <Label color={status_colors[props.status]} size="mini" basic horizontal>{props.status_name[props.status].toUpperCase()}</Label>
        </Card.Meta>
        <Card.Description>
          Scheduled from {start_time} to {end_time}
        </Card.Description>
      </Card.Content>
      <Card.Content textAlign="right" extra>
        {extra}
      </Card.Content>
    </Card>
  );
}

export default ActionCard;

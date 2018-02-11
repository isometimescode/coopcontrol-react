import React from 'react';
import { Icon, Message, Dimmer, Loader } from 'semantic-ui-react';

function ErrorMessage({message}) {
  if (!message) {
    return null;
  }

  return(
    <div>
      <Message negative icon>
        <Icon name="warning sign" />
        <Message.Content>
          <Message.Header>An error has occurred.</Message.Header>
          {message}
        </Message.Content>
      </Message>
    </div>
  );
}

const Loading = ({active}) => (
  <Dimmer active={active}>
    <Loader indeterminate content='Loading' />
  </Dimmer>
)

export { ErrorMessage, Loading };

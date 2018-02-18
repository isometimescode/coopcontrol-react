import React from 'react';
import { Icon, Message, Dimmer, Loader } from 'semantic-ui-react';

function ErrorMessage({message, header_name, ...layout}) {
  if (!message) {
    return null;
  }

  return(
    <Message negative icon {...layout}>
      <Icon name="warning sign" />
      <Message.Content>
        <Message.Header>An error has occurred{header_name ? ' on: ' + header_name : ''}.</Message.Header>
        {message}
      </Message.Content>
    </Message>
  );
}

const Loading = ({active}) => (
  <Dimmer active={active}>
    <Loader indeterminate content='Loading' />
  </Dimmer>
)

export { ErrorMessage, Loading };

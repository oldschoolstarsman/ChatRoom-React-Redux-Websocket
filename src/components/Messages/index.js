import React from 'react';
import PropTypes from 'prop-types';

import MessageDetail from 'src/containers/Messages/MessageDetail';
import MessagesStyled from './Messages.styled';

class Messages extends React.Component {
  componentDidUpdate() {
    this.chatZone.scrollBy(0, this.chatZone.scrollHeight);
  }

  render() {
    const { messages, currentUser } = this.props;
    return (
      <MessagesStyled
        ref={(elementDuDOM) => {
          this.chatZone = elementDuDOM;
        }}
        currentUser={currentUser}
      >
        {messages.map((message) => (
          <MessageDetail key={message.id} {...message} />
        ))}
      </MessagesStyled>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  currentUser: PropTypes.string,
};

Messages.defaultProps = {
  currentUser: '',
};

export default Messages;

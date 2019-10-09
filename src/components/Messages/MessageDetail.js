import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MessageDetail = ({ author, text, isMe }) => (
  <div
    className={
      classNames(
        'message',
        { 'message--not-mine': !isMe },
      )
    }
  >
    <div className="message-author">{author}</div>
    <p className="message-content">{text}</p>
  </div>
);

MessageDetail.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string.isRequired,
  isMe: PropTypes.bool.isRequired,
};

MessageDetail.defaultProps = {
  author: 'Anonyme',
};

export default MessageDetail;

import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

const Messages = ({ messages }) => {
  return messages.length > 0 ? (
    messages
  ) : (
    <Empty description="Начни общаться!)" />
  );
};

Messages.propTypes = {
  messages: PropTypes.array,
};

export default Messages;

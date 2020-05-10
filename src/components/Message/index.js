import React from 'react';
import ruLocale from 'date-fns/locale/ru';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Message.scss';

const Message = ({ avatar, user, text, date, isMe, ...props}) => (
  <div className={cn('message', { 'message--isme': isMe })}>
    <div className="message__avatar">
      <img src={avatar} alt={`Avatar ${user.fullname}`} />
    </div>
    <div className="message__content">
      <div className="message__bubble">
        <p className="message__text">{text}</p>
      </div>
      <span className="message__date">{formatDistanceToNow(date, { addSuffix: true, locale: ruLocale })}</span>
    </div>
  </div>
);

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.object,
  user: PropTypes.object,
};

export default Message;

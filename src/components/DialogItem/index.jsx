import React from 'react';
import cn from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import isThisWeek from 'date-fns/isThisWeek';
import isThisYear from 'date-fns/isThisYear';
import ruLocale from 'date-fns/locale/ru';

import { IconReaded, Avatar } from '../';

const getMessageTime = (created_at) => {
  if (isToday(created_at)) {
    return format(created_at, 'HH:mm');
  } else if (!isToday(created_at) && isThisWeek(created_at)) {
    return format(created_at, 'EEEEEE', { locale: ruLocale });
  } else if (!isThisYear(created_at)) {
    return format(created_at, 'dd.MM.yyyy');
  }

  return format(created_at, 'dd.MM');
};

const DialogItem = ({ user, text, created_at, unread, isMe }) => (
  <div className={cn('dialogs__item', {
     'dialogs__item_online': user.isOnline
   })}>
    <div className="dialogs__item-avatar">
      <Avatar user={user} />
    </div>

    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>
          { getMessageTime(created_at) }
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{ text }</p>
        { isMe && <IconReaded isMe={true} isReaded={true} /> }
        { unread > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {unread > 9 ? '9+' : unread}
            </div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;

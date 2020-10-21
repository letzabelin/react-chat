import React from 'react';
import cn from 'classnames';

import { Time, IconReaded } from '../';
import './DialogItem.scss';

const getAvatar = (avatar) => {
  if (avatar) {
    return <img
      src={avatar}
      alt="" 
    />
  } else {
    // make avatar
  }
};

const DialogItem = ({ user, message, unreaded }) => (
  <div className={cn('dialogs__item', {
     'dialogs__item_online': user.isOnline
   })}>
    <div className="dialogs__item-avatar">
      {/* <img alt={`${user.avatar} avatar`}> */}
      {/*   {user.avatar} */}
      {/* </img> */}
      {getAvatar("https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1")}
    </div>

    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>
          {/* <Time date={new Date()} /> */}
          14.17
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>
          Мы все свидетельствуем Вам глубочайшее  наше потение и целуем Ваши ручки, дражайший папенька: Михаила, Фёдор, Варвара и Андрюша
        </p>
        <IconReaded isMe={true} isReaded={true} />
        { unreaded > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {unreaded > 9 ? '9+' : unreaded}
            </div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;

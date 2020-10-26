import React from 'react';
import orderBy from 'lodash/orderBy';
import { Input, Empty } from 'antd';

import { DialogItem } from '../';
import './Dialogs.scss';

const Dialogs = ({ dialogs, userId, onSearch, inputValue }) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Input.Search value={inputValue} placeholder="Поиск среди контактов" onChange={onSearch} />
    </div>
    { dialogs.length > 0 ? (
      orderBy(dialogs, ['created_at'], ['desc']).map((dialog) => (
        <DialogItem key={dialog._id} isMe={dialog.user._id === userId} {...dialog} />
      ))
    ) : (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Контактов не найдено :(" />
    )}
  </div>
);

export default Dialogs;

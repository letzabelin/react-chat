import React from 'react';
import orderBy from 'lodash/orderBy';

import { DialogItem } from '../';
import './Dialogs.scss';

const Dialogs = ({ dialogs, userId }) => (
  <div className="dialogs">
    {
      orderBy(dialogs, ['created_at'], ['desc'])
        .map((dialog) => (
          <DialogItem
            key={dialog._id}
            isMe={dialog.user._id === userId}
            { ...dialog }
          />
        ))
    }
  </div>
);

export default Dialogs;

import React, { useState } from 'react';

import { Dialogs as BaseDialogs } from 'components';

const Dialogs = ({ dialogs, userId }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredDialogs, setFilteredDialogs] = useState([...dialogs]);

  const onChangeInput = ({ target: { value } }) => {
    setFilteredDialogs(dialogs.filter(({ user: { fullname } }) => (
      fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
    )));
    setInputValue(value);
  };

  return <BaseDialogs userId={userId} dialogs={filteredDialogs} onSearch={onChangeInput} inputValue={inputValue} />;
};

export default Dialogs;

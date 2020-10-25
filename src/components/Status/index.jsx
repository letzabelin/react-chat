import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Status.scss';

const Status = ({ online }) => (
  <span className={cn('status', { status_online: online })}>{online ? 'онлайн' : 'офлайн'}</span>
);

Status.propTypes = {
  online: PropTypes.bool,
};

export default Status;

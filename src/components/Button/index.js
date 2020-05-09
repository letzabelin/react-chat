import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Button as BaseBUtton } from 'antd';

import './Button.scss';

const Button = (props) => (
  <BaseBUtton
    {...props}
    className={cn(
      'button',
      props.className,
      {
        'button--large': props.size === 'large'
      }
    )}
  />
);

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
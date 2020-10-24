import React from 'react';

import { generateAvatarFromHash } from 'utils/helpers';
import './Avatar.scss';

const Avatar = ({ user }) => {
  if (user.avatar) {
    return <img
      src={user.avatar}
      className="avatar"
      alt={`${user.fullname} avatar`}
    />
  } else {
    const { color: original, colorLighten: lighten } = generateAvatarFromHash('3dc0520def7ba25940a17438dcc4877b')
    const fullnameFirstChar = user.fullname[0].toUpperCase();
    return (
      <div
        className="avatar avatar__symbol"
        style={{background: `linear-gradient(135deg, ${original} 0%, ${lighten} 96.52%)`}}
      >
        { fullnameFirstChar }
      </div>
    );
  }
};

export default Avatar;

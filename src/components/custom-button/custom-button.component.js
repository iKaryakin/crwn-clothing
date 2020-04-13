import React from 'react';

import './custom-component.styles.scss';

const CustomButtom = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-signin' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButtom;

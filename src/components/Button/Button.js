import React from 'react';
import './Button.css';

function Button({ href, children }) {
  return (
    <a className="button" href={href} target="_blank">
      {children}
    </a>
  );
}

export default Button;

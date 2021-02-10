import React from 'react';
import './Button.css';

function Button({ href, children }) {
  return (
    <a className="button" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default Button;

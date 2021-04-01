import React from 'react';
import './DocumentCard.css';
import './DocumentCardMobile.css';

function DocumentCard(props) {
  const iconClass = `document-card__icon ${props.icon}`;

  return (
    <div className="document-card">
      <a target="blank" href={props.href}>
        <div className={iconClass}></div>
      </a>
      <h2 className="document-card__text">{props.text}</h2>
    </div>
  );
}

export default DocumentCard;

import React from 'react';
import './Contacts.css';
import './ContactsMobile.css';

function CompetitionThemes() {
  return (
    <div className="contacts">
      <h2>Контактные данные</h2>
      <div className="contacts-wrap">
        <div className="contact-card">
          <h4>Кочеткова Марина Петровна</h4>
          <div className="contact-card__phone-number">Телефон: 8 (4912) xx-xx-xx (доб. 310)</div>
          <div className="contact-card__description">
            Начальник отдела социализации и развития одаренности детей министерства образования
            Рязанской области
          </div>
        </div>
        <div className="contact-card">
          <h4>Викулова Мария Геннадьевна</h4>
          <div className="contact-card__phone-number">Телефон: 8 (4912) xx-xx-xx</div>
          <div className="contact-card__description">
            Заместитель директора Областного государственного автономного учреждения дополнительного
            образования «Детский технопарк Кванториум «Дружба»
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompetitionThemes;

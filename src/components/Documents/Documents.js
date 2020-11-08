import React from 'react';
import './Documents.css';
import './DocumentsMobile.css';

//<i class="far fa-edit"></i>
//<i class="far fa-address-book"></i>

function Documents() {
  return (
    <div className="documents">
      <div className="document-card">
        <a
          target="blank"
          href="https://sirius62.ru/wp-content/uploads/2019/11/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D0%B5-%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2%D1%8B.pdf"
        >
          <div className="document-card__icon far fa-file-alt"></div>
        </a>
        <h2 className="document-card__text">Положение конкурса</h2>
      </div>
      <div className="document-card">
        <a
          target="blank"
          href="https://sirius62.ru/wp-content/uploads/2019/11/%D0%9F%D1%80%D0%B8%D0%BA%D0%B0%D0%B7-%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D0%B5-%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2%D1%8B.pdf"
        >
          <div className="document-card__icon far fa-edit"></div>
        </a>
        <h2 className="document-card__text">Приказ о конкурсе</h2>
      </div>
      <div className="document-card">
        <a
          target="blank"
          href="http://sirius62.ru/wp-content/uploads/2020/03/Sostav_Organizatsionnogo_Komiteta_Regionalnogo_Treka_Konkursa.pdf"
        >
          <div className="document-card__icon far fa-address-book"></div>
        </a>
        <h2 className="document-card__text">Состав Организационного комитета</h2>
      </div>
      <div className="document-card">
        <a
          target="blank"
          href="http://sirius62.ru/wp-content/uploads/2020/03/Sostav_Organizatsionnogo_Komiteta_Regionalnogo_Treka_Konkursa.pdf"
        >
          <div className="document-card__icon far fa-address-card"></div>
        </a>
        <h2 className="document-card__text">Состав Экспертной комиссии очного/заочного этапа</h2>
      </div>
    </div>
  );
}

export default Documents;

import React from 'react';
import './Documents.css';
import './DocumentsMobile.css';
import polojenie from '../../uploads/Polojenie.pdf';
import prikaz from '../../uploads/Prikaz.pdf';
import sostavKomiteta from '../../uploads/Sostav_orgkomiteta.pdf';
import experts from '../../uploads/Experts.pdf';
import agroZaochList from '../../uploads/agroprom_and_boitech_zaoch_participants_list.pdf';
import bigDataZaochList from '../../uploads/big_data_zaoch_participants_list.pdf';

function Documents() {
  return (
    <div className="documents">
      <div className="document-card">
        <a target="blank" href={polojenie}>
          <div className="document-card__icon far fa-file-alt"></div>
        </a>
        <h2 className="document-card__text">Положение конкурса</h2>
      </div>
      <div className="document-card">
        <a target="blank" href={prikaz}>
          <div className="document-card__icon far fa-edit"></div>
        </a>
        <h2 className="document-card__text">Приказ о конкурсе</h2>
      </div>
      <div className="document-card">
        <a target="blank" href={sostavKomiteta}>
          <div className="document-card__icon far fa-address-book"></div>
        </a>
        <h2 className="document-card__text">
          Состав Организационного комитета
        </h2>
      </div>
      <div className="document-card">
        <a target="blank" href={experts}>
          <div className="document-card__icon far fa-address-card"></div>
        </a>
        <h2 className="document-card__text">
          Состав Экспертной комиссии очного/заочного этапа
        </h2>
      </div>
      <div className="document-card">
        <a target="blank" href={agroZaochList}>
          <div className="document-card__icon fab fa-pagelines"></div>
        </a>
        <h2 className="document-card__text">
          Список участников очного этапа по направлению "Агропромышленные и
          биотехнологии"
        </h2>
      </div>
      <div className="document-card">
        <a target="blank" href={bigDataZaochList}>
          <div className="document-card__icon fas fa-robot"></div>
        </a>
        <h2 className="document-card__text">
          Список участников очного этапа по направлению "Большие данные,
          искусственный интеллект, финансовые технологии и машинное обучение"
        </h2>
      </div>
    </div>
  );
}

export default Documents;

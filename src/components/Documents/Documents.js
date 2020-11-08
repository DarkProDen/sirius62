import React from 'react';
import './Documents.css';
import './DocumentsMobile.css';
import polojenie from '../../uploads/polojenie-bolshie-vizovy.pdf';
import prikaz from '../../uploads/prikaz-bolshie-vizovy.pdf';
import sostavKomiteta from '../../uploads/Sostav_Organizatsionnogo_Komiteta_Regionalnogo_Treka_Konkursa.pdf';
import sostavKomissy from '../../uploads/Sostav_Expertnykh_Komissy_Regionalnogo_Treka_Konkursa.pdf';

function Documents() {
  return (
    <div className="documents">
      <div className="document-card">
        {/* <a target="blank" href={polojenie}>*/}
        <div className="document-card__icon far fa-file-alt"></div>
        {/* </a>*/}
        <h2 className="document-card__text">Положение конкурса</h2>
      </div>
      <div className="document-card">
        {/* <a target="blank" href={prikaz}>*/}
        <div className="document-card__icon far fa-edit"></div>
        {/* </a>*/}
        <h2 className="document-card__text">Приказ о конкурсе</h2>
      </div>
      <div className="document-card">
        {/* <a target="blank" href={sostavKomiteta}>*/}
        <div className="document-card__icon far fa-address-book"></div>
        {/* </a>*/}
        <h2 className="document-card__text">Состав Организационного комитета</h2>
      </div>
      <div className="document-card">
        {/* <a target="blank" href={sostavKomissy}>*/}
        <div className="document-card__icon far fa-address-card"></div>
        {/* </a>*/}
        <h2 className="document-card__text">Состав Экспертной комиссии очного/заочного этапа</h2>
      </div>
    </div>
  );
}

export default Documents;

import React from 'react';
import './Documents.css';
import './DocumentsMobile.css';
import polojenie from '../../uploads/Polojenie.pdf';
import prikaz from '../../uploads/Prikaz.pdf';
import sostavKomiteta from '../../uploads/Sostav_orgkomiteta.pdf';
import experts from '../../uploads/Experts.pdf';
import agroZaochList from '../../uploads/agroprom_and_boitech_zaoch_participants_list.pdf';
import bigDataZaochList from '../../uploads/big_data_zaoch_participants_list.pdf';
import DocumentCard from '../DocumentCard/DocumentCard';
import finalList from '../../uploads/Spisok_uchastnikov_final.pdf';

function Documents() {
  return (
    <div className="documents">
      <DocumentCard text="Положение конкурса" href={polojenie} icon="far fa-file-alt" />
      <DocumentCard text="Приказ о конкурсе" href={prikaz} icon="far fa-edit" />
      <DocumentCard
        text="Состав Организационного комитета"
        href={sostavKomiteta}
        icon="far fa-address-book"
      />
      <DocumentCard
        text="Состав Экспертной комиссии очного/заочного этапа"
        href={experts}
        icon="far fa-address-card"
      />
      <DocumentCard
        text='Список участников очного этапа по направлению "Агропромышленные и биотехнологии"'
        href={agroZaochList}
        icon="fab fa-pagelines"
      />
      <DocumentCard
        text='Список участников очного этапа по направлению "Большие данные, искусственный интеллект,
        финансовые технологии и машинное обучение"'
        href={bigDataZaochList}
        icon="fas fa-robot"
      />
      <DocumentCard
        text='Список участников заключительного этапа Всероссийского конкурса научно-технологических проектов "Большие вызовы"'
        href={finalList}
        icon="fas fa-flag-checkered"
      />
    </div>
  );
}

export default Documents;

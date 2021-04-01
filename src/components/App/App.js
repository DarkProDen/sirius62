import React from 'react';
import CompetitionThemes from '../CompetitionThemes/CompetitionThemes';
import Header from '../Header/Header';
import Documents from '../Documents/Documents';
import Contacts from '../Contacts/Contacts';
import Timing from '../Timing/Timing';
import results from '../../uploads/rezultati_ochnogo_etapa.pdf';

function App() {
  return (
    <>
      <Header />
      <Timing>
        <a href={results} target="_blank" rel="noopener noreferrer">
          Результаты очного этапа Регионального трека Всероссийского конкурса научно-технологических
          проектов «Большие вызовы»
        </a>
      </Timing>
      <CompetitionThemes />
      <Documents />
      <Contacts />
    </>
  );
}

export default App;

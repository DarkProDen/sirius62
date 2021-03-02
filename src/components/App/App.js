import React from 'react';
import CompetitionThemes from '../CompetitionThemes/CompetitionThemes';
import Header from '../Header/Header';
import Documents from '../Documents/Documents';
import Contacts from '../Contacts/Contacts';
import Timing from '../Timing/Timing';

function App() {
  return (
    <>
      <Header />
      <Timing>
        Очный этап Регионального трека Всероссийского конкурса научно-технологических проектов
        "Большие вызовы" состоится 15 марта 2021 г. с 10.00 час. до 15.00 час. на базе ОАГУДО
        "Детский технопарк Кванториум "Дружба"
      </Timing>
      <CompetitionThemes />
      <Documents />
      <Contacts />
    </>
  );
}

export default App;

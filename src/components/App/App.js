import React from 'react';
import CompetitionThemes from '../CompetitionThemes/CompetitionThemes';
import Header from '../Header/Header';
import Documents from '../Documents/Documents';
import Contacts from '../Contacts/Contacts';

function App() {
  return (
    <div>
      <Header />
      <CompetitionThemes />
      <Documents />
      <Contacts />
    </div>
  );
}

export default App;

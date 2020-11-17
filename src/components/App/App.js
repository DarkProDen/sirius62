import React from 'react';
import CompetitionThemes from '../CompetitionThemes/CompetitionThemes';
import Header from '../Header/Header';
import Documents from '../Documents/Documents';
import Contacts from '../Contacts/Contacts';
import Timing from '../Timing/Timing';

function App() {
  return (
    <div>
      <Header />
      <Timing />
      <CompetitionThemes />
      <Documents />
      <Contacts />
    </div>
  );
}

export default App;

import React from 'react';
import IntroPanel from '../components/IntroPanel';
import CertificationPanel from '../components/CertificationPanel';
import InterestedPanel from '../components/InterestedPanel';
import ExperiencedPanel from '../components/ExperiencePanel';
import LinksPanel from '../components/LinksPanel';

function App() {
  return (
    <div className="App">
      <IntroPanel />
      <CertificationPanel />
      <InterestedPanel />
      <ExperiencedPanel />
      <LinksPanel />
    </div>
  );
}

export default App;

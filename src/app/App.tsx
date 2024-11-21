import React from 'react';
import IntroPanel from '../components/IntroPanel';
import ExperiencedPanel from '../components/ExperiencePanel';
import LinksPanel from '../components/LinksPanel';
import CardwithoutDes from '../components/CardwithoutDes';
import { CertificationText, InterestText } from '../constants/data';

function App() {
  return (
      <div className="App">
        <IntroPanel />
        <CardwithoutDes title={'Certification'} contents={ CertificationText }/>
        <CardwithoutDes title={'Interested'} contents={ InterestText }/>
        <ExperiencedPanel />
        <LinksPanel />
      </div>
  );
}

export default App;

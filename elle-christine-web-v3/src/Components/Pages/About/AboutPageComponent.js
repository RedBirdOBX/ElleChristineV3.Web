import React from 'react';
import AboutPageTitleComponent from './AboutPageTitleComponent';
import AboutElleComponent from './AboutElleComponent';
import AboutBandComponent from './AboutBandComponent';

const AboutPageComponent = (props) =>
{
    return (
        <div>
          <AboutPageTitleComponent />
          <AboutElleComponent />
          <AboutBandComponent />
        </div>
    );
};

export default AboutPageComponent;
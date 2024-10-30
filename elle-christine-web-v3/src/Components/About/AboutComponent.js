import React from 'react';
import AboutPageTitleComponent from './AboutPageTitleComponent';
import AboutElleAboutComponent from './AboutElleAboutComponent';
import AboutBandAboutComponent from './AboutBandAboutComponent';

const AboutComponent = (props) =>
{
    return (
        <div>
          <AboutPageTitleComponent />
          <AboutElleAboutComponent />
          <AboutBandAboutComponent />
        </div>
    );
};

export default AboutComponent;
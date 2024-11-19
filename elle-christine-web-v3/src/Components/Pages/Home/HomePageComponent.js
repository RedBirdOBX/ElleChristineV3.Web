import React from 'react';
import HomePageTitleComponent from './HomePageTitleComponent';
import AboutElleHomeComponent from './AboutElleHomeComponent';
import UpcomingComponent from './UpcomingComponent';

const HomePageComponent = (props) =>
{
    return (
        <div>
          <HomePageTitleComponent />
          <AboutElleHomeComponent />
          <UpcomingComponent />
        </div>
    );
};

export default HomePageComponent;
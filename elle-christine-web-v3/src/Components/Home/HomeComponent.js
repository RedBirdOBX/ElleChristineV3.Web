import React from 'react';
import HomePageTitleComponent from './HomePageTitleComponent';
import AboutComponent from './AboutElleHomeComponent';
import UpcomingComponent from './UpcomingComponent';

const HomeComponent = (props) =>
{
    return (
        <div>
          <HomePageTitleComponent />
          <AboutComponent />
          <UpcomingComponent />
        </div>
    );
};

export default HomeComponent;
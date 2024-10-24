import React from 'react';
import PageTitleComponent from './PageTitleComponent';
import AboutComponent from './AboutComponent';
import UpcomingComponent from './UpcomingComponent';

const HomeComponent = (props) =>
{
    return (
        <div>
          <PageTitleComponent />
          {/* <AboutComponent />
          <UpcomingComponent /> */}
        </div>
    );
};

export default HomeComponent;
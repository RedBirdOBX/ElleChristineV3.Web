import React from 'react';
import NavPlugInComponent from './NavPlugInComponent';

const HeaderPlugInComponent = () =>
{
    return (
        <div>
            <header className="header-style1 menu_area-light">
               <NavPlugInComponent />
            </header>
        </div>
    );
};

export default HeaderPlugInComponent;
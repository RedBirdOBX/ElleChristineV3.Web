import React from 'react';
import NavComponent from './NavComponent';

const HeaderComponent = (props) =>
{
    return (
        <div>
            <header className="header-style1 menu_area-light">
               <NavComponent />
            </header>
        </div>
    );
};

export default HeaderComponent;
import React from 'react';
import MediaTitleComponent from './MediaTitleComponent';
import MediaComponent from './MediaComponent';

const MediaPageComponent = (props) =>
{
    return (
        <div>
          <MediaTitleComponent />
          <MediaComponent />
        </div>
    );
};

export default MediaPageComponent;
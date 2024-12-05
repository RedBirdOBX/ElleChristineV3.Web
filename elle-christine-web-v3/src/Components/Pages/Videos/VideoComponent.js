import React from 'react';

const VideoComponent = (props) =>
{
    return (
            <div className="col-12 my-5">
                <h4 className="text-primary">{props.video.description}</h4>
                <div className="embed-responsive embed-responsive-16by9">
                    {props.video.html}

                    <div dangerouslySetInnerHTML={{ __html: props.video.html }}></div>

                </div>
            </div>
    );
};

export default VideoComponent;

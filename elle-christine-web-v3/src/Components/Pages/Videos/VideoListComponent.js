import React from 'react';
import VideoComponent from './VideoComponent';

const VideoList = (props) =>
{
    return (
            <div className="row portfolio-gallery mt-n1-9">
                {
                    props.videos.map((v) => <VideoComponent key={v.id} video={v} />)
                }
            </div>
    );
};

export default VideoList;
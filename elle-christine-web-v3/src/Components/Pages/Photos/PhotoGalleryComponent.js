import { React, useEffect } from 'react';
import './lg-custom.css';
import PhotoComponent from './PhotoComponent';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import fullScreen from 'lightgallery/plugins/fullscreen';
import fjGallery from 'flickr-justified-gallery';


const PhotoGalleryComponent = (props) =>
{
    useEffect(() => {
      fjGallery(document.querySelectorAll('.gallery'), {
        itemSelector: '.gallery__item',
        rowHeight: 180,
        lastRow: 'start',
        gutter: 2,
        rowHeightTolerance: 0.1,
        calculateItemsHeight: false,
      });
    }, []);

    return (
            <div>
                <LightGallery
                    plugins={[lgZoom, lgVideo, fullScreen]}
                    mode="lg-fade"
                    fullScreen={true}
                    pager={true}
                    thumbnail={true}
                    galleryId={'photos'}
                    autoplayFirstVideo={false}
                    elementClassNames={'gallery'}
                    mobileSettings={
                    {
                        controls: false,
                        showCloseIcon: false,
                        download: false,
                        rotate: false
                    }}
                >

                    {
                        props.photos.map((p) => <PhotoComponent key={p.id} photo={p} />)
                    }

                </LightGallery>
            </div>
            );
  };

  export default PhotoGalleryComponent;
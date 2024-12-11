import React from 'react';

const MediaComponent = (props) =>
{
    return (
            <section>
                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-md-11 col-lg-10">
                            <div className="row">

                                <div className="col-lg-12 mb-1-9">
                                    <article className="card blog-card">

                                        <div className="row g-0">

                                            <div className="col-md-3 p-3 text-center">
                                                <img alt="Bandcamp" src="imgs/logos/BandCamp.png" />
                                            </div>

                                            <div className="col-md-9">

                                                <div className="card-body">
                                                    <iframe title="Bandcamp"
                                                                style={{ border : "0", width : "100%", height : "400px"}}
                                                                src="https://bandcamp.com/EmbeddedPlayer/album=270404330/size=large/bgcol=ffffff/linkcol=e99708/artwork=small/transparent=true/" seamless>
                                                        <a href="https://ellechristine.bandcamp.com/album/elle-acoustic-ep">Elle - Acoustic EP by Elle Christine</a>
                                                    </iframe>
                                                </div>

                                            </div>

                                        </div>

                                    </article>
                                </div>

                                <div className="col-lg-12 mb-1-9">
                                    <article className="card blog-card">

                                        <div className="row g-0">

                                            <div className="col-md-3 text-center">
                                                <img alt="Reverb Nation" src="imgs/logos/Reverb.png" />
                                            </div>
                                            <div className="col-md-9">

                                                <div className="card-body">
                                                    <iframe title="Reverb Nation"
                                                            width="100%"
                                                            height="265"
                                                            scrolling="yes"
                                                            frameBorder="no"
                                                            src="https://www.reverbnation.com/widget_code/html_widget/artist_5433439?widget_id=55&pwc[included_songs]=1&context_type=page_object&pwc[size]=small"
                                                            style={{ width : "0px", minWidth : "100%", maxWidth : "100%", height: "265" }}>
                                                        </iframe>
                                                </div>

                                            </div>

                                        </div>

                                    </article>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
    );
};

export default MediaComponent;
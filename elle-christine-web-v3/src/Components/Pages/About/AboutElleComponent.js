import React from 'react';

const AboutElleComponent = (props) =>
{
    return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="pe-lg-5">

                                <h2 className="font-weight-600">About Elle Christine</h2>

                                <p className="mb-3 mb-lg-4">
                                    Elle Christine is a singer-songwriter based out of Richmond, Virginia.
                                    Her original musical creations, stories inspired by life events, connect with the
                                    general human experience – love, loss, and overcoming hardship. Vocals reminiscent of
                                    90s female artists like Jewel and Alanis Morissette, Elle Christine’s five-piece project has
                                    transformed simplistic acoustic indie-folk music into a multifaceted sound integration –
                                    neo alternative indie-folk dipped in rock, groove, and soul.
                                    This lyrically charged music will make you feel like tapping your feet.
                                </p>

                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img alt="About Elle" src="imgs/content/about/about-elle.jpg" />
                        </div>
                    </div>

                </div>
            </section>
    );
};

export default AboutElleComponent;
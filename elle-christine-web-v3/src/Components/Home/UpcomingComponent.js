import React from 'react';

const UpcomingComponent = (props) =>
{
    return (
        <section className="bg-light-gray">
            <div className="container">
                <div className="bg-white box-shadow-primary">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="text-center">
                                <img src="~/imgs/content/gigs/@Model.Image" alt="@Model.Location" />
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div>

                                <div className="p-1-6 p-md-1-9">
                                    <h3>Next Show - @Model.Title</h3>

                                    <div className="row">
                                        <div className="col-6"><h6>@Model.Date.ToString("D")</h6></div>
                                        <div className="col-6">
                                            <h6>
                                                @Model.Location<br />
                                                @Model.Time
                                            </h6>
                                        </div>
                                    </div>

                                    <p>
                                        @Html.Raw(Model.Description)
                                    </p>

                                    <div class="row">
                                        <div className="col-6">
                                        @if (!string.IsNullOrWhiteSpace(Model.Url))
                                        {
                                        <a target="_blank" href="@Model.Url">
                                            <span className="fa fa-2x fa-globe fa-fw"></span>@Model.Title
                                        </a>
                                        }
                                        </div>
                                        <div class="col-6">
                                        <a target="_blank" href="@Model.MapUrl">
                                            <span className="fa fa-2x fa-map-marker"></span>&nbsp;map
                                        </a>
                                        </div>
                                    </div>

                                    <a href="/Shows" className="butn medium theme mt-4"><span>More Shows</span></a>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingComponent;
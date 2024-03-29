import React from 'react'

export default function Slider() {
    return (
        <div className="container">
            <h1 className="text-center text-success my-3">Welcome to the <strong>GO SERVICE</strong> </h1>
            <div className="row justify-content-center">
                <div className="col-md-10 col-sm-10">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="Image/image3.jpeg" className="d-block w-100"
                                    alt="construction1" />
                            </div>
                            <div className="carousel-item">
                                <img src="Image/image2.jpeg" className="d-block w-100" alt="construction2" />
                            </div>
                            <div className="carousel-item">
                                <img src="Image/image1.jpeg" className="d-block w-100"
                                    alt="construction3" />
                                {/* https://source.unsplash.com/776x776/?road,construction */}
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

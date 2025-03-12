import React from "react";

const Carousel = (props) => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={props.imgOne} height="700px" width="700px" className="d-block mx-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={props.imgTwo} height="700px" width="700px" className="d-block mx-auto" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={props.imgThree} height="700px" width="700px"  className="d-block mx-auto" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Carousel;
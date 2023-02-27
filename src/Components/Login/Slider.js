import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Slider() {
  return (
    <OwlCarousel className="owl-theme" loop={false} items={1}>
      <div className="item slideOne">
        <div className="sliderContent">
          <div>
            <img
              className="img-responsive"
              src={require("../../Images/fine-dine-image-1.png")}
              alt="footballCartoon"
            />
          </div>
          <p className="sliderHeader">Lorem Ipsum 1</p>
          <p className="sliderInfo">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="item slideTwo">
        <div className="sliderContent">
          <div>
            <img
              className="img-responsive"
              src={require("../../Images/fine-dine-image-7.png")}
              alt="footballCartoon"
            />
          </div>
          <p className="sliderHeader">Lorem Ipsum 2</p>
          <p className="sliderInfo">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="item slideThree">
        <div className="sliderContent">
          <div>
            <img
              className="img-responsive"
              src={require("../../Images/fine-dine-image-8.png")}
              alt="footballCartoon"
            />
          </div>
          <p className="sliderHeader">Lorem Ipsum 3</p>
          <p className="sliderInfo">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </OwlCarousel>
  );
}

export default Slider;

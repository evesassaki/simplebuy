import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import "./Slider.scss";

const images = [
  {
    image: require("../../assets/slide1.png"),
    heading: "Quick & hassle free shopping",
    desc: "Shop now",
  },
  {
    image: require("../../assets/slide2.png"),
    heading: "Most Wanted, Most Loved",
    desc: "Best products just for you",
  },
  {
    image: require("../../assets/slide3.png"),
    heading: "Everything you love in one place",
    desc: "Shop now",
  },
  {
    image: require("../../assets/slide4.png"),
    heading: "Zero crowds, awesome brands",
    desc: "Buy in one click",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = images.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    const auto = () => {
      slideInterval = setInterval(nextSlide, intervalTime);
    };

    if (autoScroll) {
      auto();
    }

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

      {images.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div
            key={index}
            className={index === currentSlide ? "slide current" : "slide"}
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="slide" />
                <div className="content">
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <a href="#product" className="--btn --btn-primary">
                    Shop Now
                  </a>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;

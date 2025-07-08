import React, { useRef, useState, useEffect } from "react";
import lool1 from "./../../Assets/lool1.jpg";
import lool2 from "./../../Assets/lool2.jpg";
import lool3 from "./../../Assets/lool3.jpg";
import lool4 from "./../../Assets/lool4.jpg";
// import rightArrow from "./right.png";
// import leftArrow from "./left.png";
import './style.css';

const Slider = () => {
  const imageContainerRef = useRef(null);
  const images = [lool1, lool2, lool3, lool4];
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (visibleIndex + 1) % images.length;
      slideTo(nextIndex);
    }, 1500); // Adjust the interval time in milliseconds (e.g., 3000 for 3 seconds)

    return () => clearInterval(interval);
  }, [visibleIndex, images.length]);

  const slideTo = (index) => {
    setVisibleIndex(index);
    if (imageContainerRef.current) {
      const slideWidth = imageContainerRef.current.offsetWidth;
      imageContainerRef.current.style.transform = `translateX(${-slideWidth * index}px)`;
    }
  };

  // const handlePrev = () => {
  //   let prevIndex = (visibleIndex - 1 + images.length) % images.length;
  //   slideTo(prevIndex);
  // };

  // const handleNext = () => {
  //   let nextIndex = (visibleIndex + 1) % images.length;
  //   slideTo(nextIndex);
  // };

  return (
    <div className="slider-container">
      <div className="content">
        {/* <div className="prev" onClick={handlePrev}>
          <img className="arrow" src={leftArrow} alt="Previous" />
        </div> */}
        <div className="slide-panel" ref={imageContainerRef}>
          {images.map((image, index) => (
            <img
              className="photo"
              key={index}
              src={image}
              alt={`Slide ${index}`}
            />
          ))}
        </div>
        {/* <div className="next" onClick={handleNext}>
          <img className="arrow" src={rightArrow} alt="Next" />
        </div> */}
      </div>
    </div>
  );
};

export default Slider;

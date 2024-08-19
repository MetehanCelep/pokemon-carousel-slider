import React from "react";
import "./Slider.css";

const DotSlider = ({ visibleItems, items, currentIndex, setCurrentIndex }) => {
  const totalPages = Math.ceil(items.length / Math.max(visibleItems, 1));

  const activePage = Math.ceil(currentIndex / visibleItems);

  const handleDotClick = (pageIndex) => {
    setCurrentIndex(pageIndex * visibleItems);
  };

  return (
    <div className="dot-slider">
      {Array.from({ length: totalPages }).map((element, index) => (
        <span
          key={index}
          className={`dot ${index === activePage ? "active" : ""}`}
          onClick={() => handleDotClick(index)}
        >
          &#9679;
        </span>
      ))}
    </div>
  );
};

export default DotSlider;

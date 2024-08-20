import React, { useState, useEffect } from "react";
import SliderContent from "./SliderContent";
import DotSlider from "./DotSlider";
import "./Slider.css";

const SliderContainer = ({ apiUrl }) => {
  const [items, setItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setItems(data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  useEffect(() => {
    const updateVisibleItems = () => {
      const containerWidth = window.innerWidth;
      const itemWidth = 470;
      const itemsVisible = Math.floor(containerWidth / itemWidth);
      setVisibleItems(itemsVisible);
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = items.length - visibleItems;
      const newIndex = Math.min(prevIndex + visibleItems, maxIndex);
      return newIndex;
    });
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = Math.max(prevIndex - visibleItems, 0);
      return newIndex;
    });
  };

  return (
    <div className="slider-container">
      <h1 className="slider-header">Pokémon</h1>
      <div className="slider-wrapper">
        <button
          className={`slider-arrow left-arrow`}
          onClick={goToPrevious}
          disabled={currentIndex === 0}
        >
          &#10094;
        </button>

        <SliderContent
          items={items}
          currentIndex={currentIndex}
          visibleItems={visibleItems}
        />

        <button
          className={`slider-arrow right-arrow`}
          onClick={goToNext}
          disabled={currentIndex >= items.length - visibleItems}
        >
          &#10095;
        </button>
      </div>
      <DotSlider 
        visibleItems={visibleItems}
        items={items}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default SliderContainer;

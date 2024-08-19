import React from 'react';
import SliderItem from './SliderItem';

const SliderContent = ({ items, currentIndex, itemsToShow, expandedIndex, setExpandedIndex }) => {
  const itemWidth =380;
  return (
    <div 
      className="slider-content" 
      style={{ transform: `translateX(-${currentIndex * itemWidth}px)`,
      transition: 'transform 0.5s ease-in-out',
      display: 'flex',
       }}
    >
      {items.map((item, index) => (
        <SliderItem
          key={index}
          item={item}
          index={index}
          currentIndex={currentIndex}
          itemsToShow={itemsToShow}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
          itemWidth={itemWidth}
        />
      ))}
    </div>
  );
};

export default SliderContent;

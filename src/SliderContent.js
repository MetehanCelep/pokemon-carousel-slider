import React from 'react';
import SliderItem from './SliderItem';

const SliderContent = ({ items, currentIndex, visibleItems }) => {
  const itemWidth = 370; 
  return (
    <div 
      className="slider-content" 
      style={{ 
        transform: `translateX(-${currentIndex * itemWidth}px)`,
        transition: 'transform 0.5s ease-in-out',
        display: 'flex',
        marginLeft:'28px'
        
      }}
    >
      {items.map((item, index) => (
        <SliderItem
          key={index}
          item={item}
          index={index}
          itemWidth={itemWidth}
        />
      ))}
    </div>
  );
};

export default SliderContent;

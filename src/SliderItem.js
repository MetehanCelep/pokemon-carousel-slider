import React from 'react';
import { useNavigate } from 'react-router-dom';

const SliderItem = ({ item, index, itemWidth }) => {
  const navigate = useNavigate();

  const handleDetailsClick = (e, id) => {
    navigate(`/pokemon/${id}`);
  };

  return (
    <div
      className="slider-item" 
      style={{ 
        flex: `0 0 ${itemWidth}px`,
      }}
    >
      <div className="slider-item-inner">
        <img
          src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`} 
          alt={item.name}
          style={{ width: '100%', height: 'auto' }}
        />
        <h2>{item.name}</h2>
        
        <button
          className="details-button"
          onClick={(e) => handleDetailsClick(e, item.name)}
        >
          Show Details
        </button>
      </div>
    </div>
  );
};

export default SliderItem;

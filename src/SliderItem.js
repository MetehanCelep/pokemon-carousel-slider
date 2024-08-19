import React from 'react';
import { useNavigate } from 'react-router-dom';

const SliderItem = ({ item, index, itemsToShow, expandedIndex, setExpandedIndex, itemWidth }) => {
  const navigate = useNavigate();

  const handleCardClick = async (index, url) => {
    if (expandedIndex?.index === index) {
      setExpandedIndex(null);
    } else {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setExpandedIndex({ index, data });
      } catch (error) {
        console.error('Hata:', error);
      }
    }
  };

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
        {expandedIndex?.index === index && (
          <div className="pokemon-details">
            <p><strong>Ability:</strong> {expandedIndex.data.abilities[0].ability.name}</p>
            <p><strong>Base Experience:</strong> {expandedIndex.data.base_experience}</p>
            <p><strong>Height:</strong> {expandedIndex.data.height}</p>
          </div>
        )}
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

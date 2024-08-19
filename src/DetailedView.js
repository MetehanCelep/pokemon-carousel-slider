import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Slider.css'; 

const DetailedView = () => {
  const { id } = useParams(); 
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!pokemon) return <div>No Pokémon data found.</div>;

  return (
    <div className="slider-item">
      <div className="slider-item-inner">
        <img
          src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
          alt={pokemon.name}
          className="slider-item-image"
        />
        <h2>{pokemon.name}</h2>
        <div className="pokemon-details">
          <p><strong>Ability:</strong> {pokemon.abilities[0].ability.name}</p>
          <p><strong>Base Experience:</strong> {pokemon.base_experience}</p>
          <p><strong>Height:</strong> {pokemon.height}</p>
        </div>
        <button
          className="details-button"
          onClick={() => window.history.back()} 
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default DetailedView;

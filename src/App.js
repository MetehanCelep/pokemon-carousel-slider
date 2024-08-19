import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SliderContainer from './SliderContainer';
import DetailedView from './DetailedView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SliderContainer apiUrl="https://pokeapi.co/api/v2/pokemon?limit=10" cardCount="10"/>} />
        <Route path="/pokemon/:id" element={<DetailedView />} />
      </Routes>
    </Router>
  );
};

export default App;

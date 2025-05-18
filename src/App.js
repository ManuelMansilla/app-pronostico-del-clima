import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchView from './views/SearchView';
import DetailView from './views/DetailView';

function App() {
  return (
    <BrowserRouter>
    <Header title="Pronóstico del Clima" />
      <Routes>
        <Route path="/" element={<SearchView />} />
        <Route path="/detail" element={<DetailView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
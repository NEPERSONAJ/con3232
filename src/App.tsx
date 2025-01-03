import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContestsPage from './pages/ContestsPage';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contests" element={<ContestsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
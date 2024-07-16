import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UrlShortenerComponent from './components/UrlShortener';
import AdminComponent from './components/Admin';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UrlShortenerComponent />} />
        <Route path="/admin" element={<AdminComponent />} />
      </Routes>
    </Router>
  );
};

export default App;

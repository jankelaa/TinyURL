import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UrlShortenerComponent from './components/UrlShortener';
import AdminComponent from './components/Admin';
import RedirectComponent from './components/Redirect';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UrlShortenerComponent />} />
        <Route path="/admin" element={<AdminComponent />} />
        <Route path="/:shortUrl" element={<RedirectComponent />} />
      </Routes>
    </Router>
  );
};

export default App;

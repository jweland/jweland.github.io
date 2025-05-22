import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import StrideSync from './Components/StrideSync/StrideSync'
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/stridesync" element={<StrideSync />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


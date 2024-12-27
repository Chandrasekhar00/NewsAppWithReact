import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<News setProgress={setProgress} country="us" pageSize={12} category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} country="us" pageSize={12} category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} country="us" pageSize={12} category="entertainment" />} />
          <Route path="/health" element={<News setProgress={setProgress} country="us" pageSize={12} category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} country="us" pageSize={12} category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} country="us" pageSize={12} category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} country="us" pageSize={12} category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InviteCode from '../src/components/InviteCode';
import VideoForm from '../src/components/VideoRecorder';
import ThankYou from '../src/components/ThankYou';
import './index.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InviteCode />} />
        <Route path="/form" element={<VideoForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
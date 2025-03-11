// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Conversations from './pages/conversations';
import Idioms from './pages/idioms';
import PhrasalVerbs from './pages/phrasalverbs';
import CommonPatterns from './pages/commonPatterns';
import Home from './pages/home';
import Layout from './components/layout';

function App() {
  return (
    <>
       <Router>
         <Routes>
          <Route element={<Layout/>}>
            <Route path="/conversations" element={<Conversations />} />
            <Route path="/idioms" element={<Idioms />} />
            <Route path="/phrasal-verbs" element={<PhrasalVerbs />} />
            <Route path="/common-patterns" element={<CommonPatterns />} />
            <Route path="/home" element={<Home />} />
          </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;

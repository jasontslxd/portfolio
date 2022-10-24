import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Personal from './components/Personal'
import Projects from './components/Projects'
import YoutubeClone from './components/yt-clone/components/YoutubeClone'

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/personal-info" element={<Personal />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/yt-clone" element={<YoutubeClone />}/>
    </Routes>
  </Router>,
  document.getElementById("root")
)

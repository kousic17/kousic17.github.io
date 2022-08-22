import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import './CSS/Navbar.css';
import './CSS/About.css';
import './CSS/Social.css';
import './CSS/Work.css';
import './CSS/Education.css';
import './CSS/Skills.css';
import './CSS/Footer.css';
import Navbar from './Components/Navbar';
import About from './Contents/About';
import Work from './Contents/Work';
import Education from './Contents/Education';
import Skills from './Contents/Skill';
import Footer from './Components/Footer';
import { BrowserRouter as Router} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
require('dotenv').config();

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
  <Router>
    <Navbar /><About /><Work /><Education /><Skills /><Footer />
  </Router>
)
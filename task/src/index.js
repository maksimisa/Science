import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import ReactDOM from 'react-dom';

import './index.scss';
import 'macro-css';

import App from './App';
import Drawer from './components/Drawer';
import Error from './pages/Error';
import Article from './pages/Article';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} exact />
      <Route path='/news' element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<Article />} />
      </Route>

      <Route path="/about" element={<Drawer />} exact />
      <Route path='*' element={<Error />} />
      
    </Routes>

  </Router>
);


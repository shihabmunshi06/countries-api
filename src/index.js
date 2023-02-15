import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./components/App"
import Top from './components/Top';
import SingleCountry from './components/SingleCountry';
import NoMatch from './components/NoMatch';

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Top />} >
        < Route index element={<App />} />
        <Route path=":countryName" element={<SingleCountry />} />
      </Route >
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </BrowserRouter >
)
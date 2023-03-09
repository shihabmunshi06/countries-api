import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Provider } from 'react-redux';
import store from "./redux/store"

import App from "./components/App"
import Top from './components/top/Top';
import SingleCountry from './components/country/SingleCountry';
import NoMatch from './components/NoMatch';

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Top />} >
          < Route index element={<App />} />
          <Route path=":countryName" element={<SingleCountry />} />
        </Route >
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Provider>

  </BrowserRouter >
)
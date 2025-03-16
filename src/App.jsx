import { BrowserRouter, Routes, Route } from "react-router";

import Nav from './layout/nav/Nav';
import Filters from './layout/filters/Filters';
import Countries from "./layout/countries/Countries"
import CountryDetails from './layout/country-details/CountryDetails';


export default function App() {

  return (
    <div className='main-container'>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <div className="filters-countries-wrapper">
              <Filters />
              <Countries />
            </div>
          } />
          <Route path='/:cca3' element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

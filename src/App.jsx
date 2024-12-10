import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { BrowserRouter, Routes, Route } from "react-router";

import TopPart from './components/top-part/TopPart'
import Content from "./components/content/Content"

import Search from './components/filters/Search'
import Dropdown from './components/filters/Dropdown'

import { fetchCountries } from './app/features/countriesSlice'
import CountryDetails from './components/singlePageCountry/CountryDetails';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])
  return (
    <div className='main-container'>
      <TopPart />
      <div className="filters-content-wrapper">
        <div className='filters'>
          <Search />
          <Dropdown />
        </div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/:anytext' element={<CountryDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

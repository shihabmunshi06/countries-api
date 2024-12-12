import React from 'react';
import Country from '../country/Country';
import { useSelector } from 'react-redux';



export default function Content() {


    const countriesArray = useSelector(state => state.countries.data);
    const searchedCountries = useSelector(state => state.search.data)
    const dropdownCountries = useSelector(state => state.dropdown.data)


    if (!countriesArray || countriesArray.length === 0) {
        return <h1>Data is Loading.....</h1>;
    }

    let countriesToDisplay = countriesArray;
    if (searchedCountries.length > 0) {
        countriesToDisplay = searchedCountries;
    }
    if (dropdownCountries.length > 0) {
        countriesToDisplay = dropdownCountries;
    }
    if (searchedCountries.length > 0 && dropdownCountries.length > 0) {
        countriesToDisplay = dropdownCountries.filter(country =>
            searchedCountries.some(searchedCountry => searchedCountry.name.common === country.name.common)
        );
    }
    if (countriesToDisplay.length === 0) {
        return <h1>No countries found</h1>;
    }
    return (
        <div className="content">
            {countriesToDisplay.map((country, index) => (
                <Country key={index} country={country} />
            ))}
        </div>
    );
}

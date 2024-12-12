import React from 'react';
import Country from '../country/Country';
import { useSelector } from 'react-redux';



export default function Content() {


    const { data: countriesArray, status: countriesStatus } = useSelector(state => state.countries);
    const { data: searchedCountries, status: searchedCountriesStatus } = useSelector(state => state.search)
    const { data: dropdownCountries, status: dropdownCountriesStatus } = useSelector(state => state.dropdown)


    if (!countriesArray || countriesArray.length === 0) {
        return <h1>Data is Loading.....</h1>;
    }
    if (searchedCountriesStatus === "failed" || dropdownCountriesStatus === "failed") {
        return <h1>No Matching Data Found</h1>
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

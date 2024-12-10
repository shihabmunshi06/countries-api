import React from 'react';
import Country from '../country/Country';
import { useSelector } from 'react-redux';

export default function Content() {
    const countriesArray = useSelector(state => state.countries.data);
    const searchedCountries = useSelector(state => state.search.data)


    if (!countriesArray || countriesArray.length === 0) {
        return <h1>Data is Loading.....</h1>;
    }

    return (
        <div className="content">
            {searchedCountries.length > 0 ?
                searchedCountries.map((country, index) => (
                    <Country key={index} country={country} />
                ))
                :
                countriesArray.map((country, index) => (
                    <Country key={index} country={country} />
                ))
            }
        </div>
    );
}

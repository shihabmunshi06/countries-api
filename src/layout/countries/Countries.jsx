import { useDispatch, useSelector } from 'react-redux';
import { useGetCountriesQuery, useGetSearchQuery, useGetRegionQuery } from '../../app/features/apiSlice';
import { resetHistory } from '../../app/features/navigationSlice';

import Card from './country-card/Card';

import "./countries.scss"
import { useEffect } from 'react';


export default function Content() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(resetHistory())
    }, [])

    const dropdownRegion = useSelector(state => state.dropdown.region);
    const searchText = useSelector(state => state.search.text)

    const { data: countriesArray, isLoading, isError, error } = useGetCountriesQuery()
    const { data: searchedCountries, isLoading: searchIsLoading, isError: searchIsError, error: searchError } = useGetSearchQuery(searchText, { skip: !searchText })
    const { data: dropdownCountries, isLoading: dropdownIsLoading, isError: dropdownIsError } = useGetRegionQuery(dropdownRegion, { skip: !dropdownRegion })



    if (isError) {
        return <h1>there was an error named: "{error.status}" and the message is: "{error.error}"</h1>
    }

    if (searchIsError) {
        return <h1>{searchError.status} {searchError.data.message}</h1>
    }
    if (dropdownIsError) {
        return <h1>something unexpected happened sorry</h1>
    }

    if (isLoading || dropdownIsLoading || searchIsLoading) {
        return <h1>data is loading...</h1>
    }

    if (countriesArray.length === 0) {
        return <h1>No countries found</h1>;
    }

    let countriesToDisplay = countriesArray;
    if (searchText != "" && dropdownRegion == "") {
        countriesToDisplay = searchedCountries;
    }
    if (dropdownRegion != "" && searchText == "") {
        countriesToDisplay = dropdownCountries;
    }
    if (searchText != "" && dropdownRegion != "") {
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
                <Card key={index} country={country} />
            ))}
        </div>
    );
}

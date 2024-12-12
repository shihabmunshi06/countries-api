import React from 'react'
import { fetchCountry } from '../../app/features/countrySlice';
import { useDispatch } from 'react-redux';

export default function CountryButton({ countryName, countryCode }) {
    const dispatch = useDispatch()

    const handleCLick = (e) => {
        e.preventDefault();
        dispatch(fetchCountry(countryCode))
    }
    return (
        <div className="button">
            <button onClick={handleCLick}>{countryName}</button>
        </div>
    )
}

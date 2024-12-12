import React from 'react'
import { useNavigate } from 'react-router';

export default function CountryButton({ countryName, countryCode }) {

    const navigate = useNavigate()
    const handleCLick = (e) => {
        e.preventDefault();

        navigate("/" + countryCode)
    }
    return (
        <div className="button">
            <button onClick={handleCLick}>{countryName}</button>
        </div>
    )
}

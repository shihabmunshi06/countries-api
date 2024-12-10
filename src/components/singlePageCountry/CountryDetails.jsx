import React from 'react'
// import { useParams } from 'react-router'
import { useSelector } from 'react-redux';


export default function CountryDetails() {
    // const { anytext } = useParams()
    const countryData = useSelector(state => state.country)
    const { region } = countryData
    return (
        <div>
            <h1>{region}</h1>
            <p>ungabunga</p>
        </div>
    )
}

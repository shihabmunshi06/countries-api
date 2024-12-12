import React from 'react'
import CountryButton from './CountryButton'
import { useSelector } from 'react-redux'

export default function Border({ borderCodes }) {
    const { status, data } = useSelector(state => state.border)
    if (status === "loading") {
        return <h1>Borders Loading</h1>
    }
    if (status === "succeeded") {
        return (
            <div className="texts__bottom">
                <h3>Border Countries:</h3>
                <div className="countries-button-wrapper">
                    {data.map((e, index) => <CountryButton key={index} countryName={e} countryCode={borderCodes[index]} />)}
                </div>
            </div>
        )
    }
    if (status === "failed") {
        return <h1>Failed to laod borders</h1>
    }
}

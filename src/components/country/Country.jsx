import React from "react";
import { useNavigate } from "react-router";

// import { gsap } from "gsap";
// import { useGSAP } from '@gsap/react';

export default function Country({ country }) {

    const { capital = [], flags: { alt, svg }, name: { common }, population, region, cca3 } = country;
    let formattedNumber = population.toLocaleString()

    //to see details send this object

    const navigate = useNavigate()

    const handleCountryClick = () => {
        navigate(cca3)
    }

    return (
        <div onClick={handleCountryClick} className="card">
            <div className="flag">
                <img src={svg} alt={alt} />
            </div>
            <div className="details">
                <h1>{common}</h1>
                <p>population: {formattedNumber}</p>
                <p>region: {region}</p>
                <p>capital: {capital.join(", ")}</p>
            </div>
        </div>
    )
}
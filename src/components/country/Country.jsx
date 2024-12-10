import React from "react";
import { useNavigate } from "react-router";
import { added } from "../../app/features/countrySlice";
import { useDispatch } from "react-redux";

export default function Country({ country }) {
    const dispatch = useDispatch()

    const { capital: [capitalCity], flags: { alt, png }, name: { common }, population, region } = country;
    let formattedNumber = population.toLocaleString()

    const navigate = useNavigate()

    const handleCountryClick = () => {
        dispatch(added({ region, capitalCity }))
        navigate(common)
    }

    return (
        <div onClick={handleCountryClick} className="card">
            <div className="flag">
                <img src={png} alt={alt} />
            </div>
            <div className="details">
                <h1>{common}</h1>
                <p>population: {formattedNumber}</p>
                <p>region: {region}</p>
                <p>capital: {capitalCity}</p>
            </div>
        </div>
    )
}
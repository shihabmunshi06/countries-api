import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { addHistory } from "../../../app/features/navigationSlice";

import "./card.scss"

export default function Card({ country }) {

    const { capital = [], flags: { alt, svg }, name: { common }, population, region, cca3 } = country;
    let formattedNumber = population.toLocaleString()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        // dispatch(addHistory(cca3))
        navigate(cca3)
    }

    return (
        <div onClick={handleClick} className="card">
            <div className="flag">
                <img src={svg} alt={alt} />
            </div>
            <div className="details">
                <h1>{common}</h1>
                <p>Population: <span>{formattedNumber}</span> </p>
                <p>Region: <span>{region}</span> </p>
                <p>Capital: <span>{capital.join(", ")}s</span> </p>
            </div>
        </div>
    )
}
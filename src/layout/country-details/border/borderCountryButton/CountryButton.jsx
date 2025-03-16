import { useNavigate } from 'react-router';

import "./country-button.scss"

export default function CountryButton({ countryName, countryCode }) {

    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/" + countryCode)
    }
    return (
        <div className="button" >
            <button onClick={handleClick} >{countryName}</button>
        </div>
    )
}

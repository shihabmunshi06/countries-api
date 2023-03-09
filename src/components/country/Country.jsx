import { useNavigate } from "react-router-dom"

export default function Country({ data }) {
    const {
        capital,
        population,
        region,
        name: { common: commonName, official: officialname },
        flags: { svg: flag }
    } = data;

    let navigate = useNavigate()

    let path = commonName.split(" ")[0]

    function handleCllick() {
        navigate(path, {
            state: data
        })
    }

    return (
        <div className="country" onClick={handleCllick}>
            <img src={flag} alt="flag" />
            <div className="data">
                <h1>{commonName}</h1>
                <h2>Population: <span>{population}</span></h2>
                <h2>Region: <span>{region}</span></h2>
                <h2>Capital: <span>{capital ? capital[0] : ""}</span></h2>
            </div>
        </div>
    )
}



// const { population, region, name: { official: name }, capital: [capital], flags: { svg: flag } } = response.data[20];
// let push = {
//     name,
//     population,
//     region,
//     capital,
//     flag
// }


// {
//     name: "",
//     population: "",
//     region: "",
//     capital: "",
//     flag: ""
// }
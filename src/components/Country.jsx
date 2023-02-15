import { useNavigate } from "react-router-dom"

export default function Country({ data }) {
    const { population, region, name: { official: name, common: shortName }, flags: { svg: flag } } = data;

    let navigate = useNavigate()

    let path = shortName.split(" ")[0]
    let send = { state: { data } }

    function handleCllick() {
        navigate(path, send)
    }

    return (
        <div className="country" onClick={handleCllick}>
            {/* <img src={data.flag} alt="flag" /> */}
            <div className="data">
                <h1>{name}</h1>
                <h2>Population: <span>{population}</span></h2>
                <h2>Region: <span>{region}</span></h2>
                <h2>Capital: <span>{data.capital ? data.capital[0] : ""}</span></h2>
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
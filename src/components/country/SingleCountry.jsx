import { useNavigate, useLocation } from "react-router-dom";

export default function SingleCountry() {

    let location = useLocation()
    let navigate = useNavigate()

    let data = location.state

    const { name: { common: commonName }, population, region, subregion, borders, tld } = data;


    return (
        <div className="single-country">
            <div className="back" onClick={() => navigate(-1)}>Back</div>

            <div className="main">
                <div className="img_wrapper"></div>
                <div className="right">
                    <h1>{commonName}</h1>
                    <div className="split">
                        <div className="left">
                            <h2>Native Name: <span>{commonName}</span></h2>
                            <h2>Population: <span>{population}</span></h2>
                            <h2>Region: <span>{region}</span></h2>
                            <h2>Sub Region: <span>{subregion}</span></h2>
                            <h2>Capital: <span>{data.capital ? data.capital[0] : ""}</span></h2>
                        </div>

                        <div className="right">
                            <h2>
                                Top Level Domain:
                                {tld.map(each => <span>{each}</span>)}


                            </h2>
                            <h2>Currencies: <span>{ }</span></h2>
                            <h2>Languages: <span>{ }</span></h2>
                        </div>

                    </div>
                    <div className="bottom">
                        <h2>Border Countries: </h2>
                        <div className="borders">
                            {borders ?
                                borders.map(each => {
                                    return (
                                        <div className="border_country">{each}</div>
                                    )
                                }) :
                                ""}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

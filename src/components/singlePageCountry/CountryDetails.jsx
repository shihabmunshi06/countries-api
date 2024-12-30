import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

import { fetchCountry } from '../../app/features/countrySlice';
import { fetchBorder } from '../../app/features/borderSlice';
import { goback } from '../../app/features/countrySlice';
import { resetHistory } from '../../app/features/countrySlice';

import Border from './Border';

export default function CountryDetails() {
    const { status, data, history } = useSelector(state => state.country)
    const { cca3 } = useParams()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (cca3) {
            dispatch(fetchCountry(cca3))
        }
    }, [cca3, dispatch])

    useEffect(() => {
        if (status === "succeeded") {
            const { borders } = data
            if (borders && borders.length > 0) {
                dispatch(fetchBorder(borders))
            }
        }
    }, [data, dispatch, status])

    if (status === "loading") {
        return <h1>Data is Loading</h1>
    }
    if (status === "failed") {
        return <h1> data fetching failed sorry</h1>
    }
    if (status === "succeeded") {
        const { capital, flags: { alt, svg }, name: { common, nativeName }, population, region, subregion, currencies, languages, tld = "", borders = [] } = data;

        const firstNativeNameObject = nativeName[Object.keys(nativeName)[0]]
        const firstcurrencyObject = currencies[Object.keys(currencies)[0]]
        let formattedPopulation = population.toLocaleString()
        let languageArray = Object.values(languages)


        const handleCLick = (e) => {
            e.preventDefault()
            if (history.length === 1) {
                navigate("/")
                dispatch(resetHistory())
            }
            dispatch(goback())
        }

        return (
            <div className='country-details'>
                <div className="back-button">
                    <button onClick={handleCLick}>Back</button>
                </div>
                <div className="country-details__content">
                    <div className="flag">
                        <img src={svg} alt={alt} />
                    </div>
                    <div className="texts">
                        <div className="texts__top">
                            <h1>{common}</h1>
                        </div>
                        <div className="texts__middle">
                            <div className="texts__middle__left">
                                <p>
                                    <span className='bold'>Native Name: </span>
                                    <span>
                                        {firstNativeNameObject.official}
                                    </span>
                                </p>
                                <p>
                                    <span className='bold'>Population: </span>
                                    {formattedPopulation}</p>
                                <p>
                                    <span className='bold'>Region: </span>
                                    {region}</p>
                                <p>
                                    <span className='bold'>Sub Region: </span>
                                    {subregion}</p>
                                <p>
                                    <span className='bold'>Capital: </span>
                                    {capital.join(", ")}</p>


                            </div>
                            <div className="texts__middle__right">
                                <p>
                                    <span className='bold'>
                                        Top Level Domain:
                                    </span>
                                    {" " + tld[0]}
                                </p>
                                <p>
                                    <span className='bold'>
                                        Currencies:
                                    </span>
                                    {" " + firstcurrencyObject.name}
                                </p>
                                <p>
                                    <span className='bold'>
                                        Languages:
                                    </span>
                                    {" " + languageArray.join(", ")}
                                </p>
                            </div>
                        </div>
                        <Border borderCodes={borders} />

                    </div>
                </div>
            </div>
        )
    }

}

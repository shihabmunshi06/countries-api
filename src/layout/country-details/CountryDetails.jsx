import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { useGetCountryQuery } from '../../app/features/apiSlice';
import { goback } from '../../app/features/navigationSlice';

import Border from './border/Border';

import "./country-details.scss"


export default function CountryDetails() {
    const { cca3 } = useParams()
    const { data, isLoading, isError } = useGetCountryQuery(cca3)
    const history = useSelector(state => state.navigation.history)

    const navigate = useNavigate()
    const dispatch = useDispatch()


    if (isLoading) {
        return <h1>Data is Loading</h1>
    }
    if (isError) {
        return <h1> data fetching failed sorry</h1>
    }
    if (data) {
        const { capital, flags: { alt, svg }, name: { common, nativeName }, population, region, subregion, currencies, languages, tld = "", borders = [] } = data[0];

        const firstNativeNameObject = nativeName[Object.keys(nativeName)[0]]
        const firstcurrencyObject = currencies[Object.keys(currencies)[0]]
        let formattedPopulation = population.toLocaleString()
        let languageArray = Object.values(languages)


        const handleCLick = (e) => {
            e.preventDefault()
            if (history.length === 1) {
                navigate("/")
            }
            else {
                navigate("/" + history[history.length - 2])
                dispatch(goback())
            }
        }

        return (
            <div className='country-details'>
                <div onClick={handleCLick} className="back-button">
                    <button >Back</button>
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

import { useEffect, useState } from "react";

import Search from "./top/Search"
import Dropdown from "./top/Dropdown"
import Country from "./country/Country";

import { useDispatch, useSelector } from "react-redux";


import allCountriesFetch from "../fetch/allCountriesFetch";
import { countryByRandom } from "../redux/actionsMaker";

const App = () => {

    let allCountries = useSelector(state => state.allCountries)
    let countryDatas = useSelector(state => state.countryDatas)

    const dispatch = useDispatch()

    useEffect(() => {
        if (allCountries.length < 1)
            dispatch(allCountriesFetch)

    }, [dispatch, allCountries])

    useEffect(() => {

        if (allCountries.length > 0 && countryDatas.length < 1) {

            let randomNumbers = []

            for (let i = 0; i < 8; i++) {
                let rand = Math.floor(Math.random() * 250)
                if (i > 0) {
                    if (randomNumbers[i - 1] === rand) continue
                }
                randomNumbers.push(rand)
            }

            dispatch(countryByRandom(randomNumbers))
        }

    }, [dispatch, allCountries, countryDatas])


    return (
        <>

            <div className="filter">
                <Search />
                <Dropdown />
            </div>

            <div className="countries">
                {countryDatas.length < 1 ?
                    <h2>Countries are loading</h2>
                    :
                    countryDatas.map((each, index) => {
                        return (
                            <Country key={index} data={each} />
                        )
                    })}
            </div>
        </>


    )
}

export default App
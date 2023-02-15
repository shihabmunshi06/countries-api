import { useEffect, useState } from "react";
import axios from "axios";

import Search from "./Search"
import Dropdown from "./Dropdown"
import Country from "./Country";


const App = () => {
    let [data, setData] = useState([])

    const fetcher = async () => {
        const responseAll = await axios("https://restcountries.com/v3.1/all");

        let a = [];
        for (let i = 0; i < 8; i++) {
            let rand = Math.floor(Math.random() * 250)
            if (i > 0)
                if (a[i - 1] === a[i]) continue;

            a.push(responseAll.data[rand])
        }
        setData(a)
    }

    useEffect(() => {
        fetcher()
    }, [])


    const fetchRegion = async (value) => {
        const responseRegion = await axios(`https://restcountries.com/v3.1/region/${value}`);
        setData(responseRegion.data)
    }
    const fetchSearch = async (value) => {
        const responseSearch = await axios(`https://restcountries.com/v3.1/name/${value}`);
        setData(responseSearch.data)
    }

    const countryRender = data.map((each, index) => {
        return (
            <Country key={index} data={each} />
        )
    })

    return (
        <>

            <div className="filter">
                <Search fetch={fetchSearch} />
                <Dropdown fetch={fetchRegion} />
            </div>

            <div className="countries">
                {countryRender}
            </div>
        </>


    )
}

export default App
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

import nameFetch from "../../fetch/nameFetch"


export default function Search() {
    let [search, setSearch] = useState("");

    const dispatch = useDispatch()

    function handleChange(e) {
        setSearch(e.target.value)
    }

    useEffect(() => {

        const timeId = setTimeout(() => {
            if (search)
                dispatch(nameFetch(search))
        }, 1000);

        return () => {
            clearTimeout(timeId)
        }

    }, [search, dispatch])

    return (
        <input onChange={handleChange} value={search} name="search" placeholder="Search a country..." type="text" />

    )
}
import { useEffect, useState } from "react"


export default function Search(props) {
    let [search, setSearch] = useState("");

    function handleChange(e) {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const timeId = setTimeout(() => {
            if (search)
                props.fetch(search)
        }, 500);

        return () => {
            clearTimeout(timeId)
        }
    }, [search])

    return (
        <input onChange={handleChange} value={search} name="search" placeholder="Search a country..." type="text" />

    )
}
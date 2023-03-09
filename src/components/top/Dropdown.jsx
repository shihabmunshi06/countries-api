import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import RegionFetch from "../../fetch/RegionFetch"

const optionsList = [
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
]

export default function Dropdown() {
    let [expanded, setExpanded] = useState(false);
    let [selected, setSelected] = useState(-1);

    const dispatch = useDispatch()


    const toggleExpand = () => {
        setExpanded(!expanded);
    }


    const listRenders =
        optionsList.map((each, index) => {
            return (
                <li
                    key={each}
                    role="option"
                    aria-selected={selected === index}
                    onClick={() => {
                        console.log("clicked")
                        setSelected(index);
                        setExpanded(false);
                    }}
                >
                    {each}
                </li>
            )
        })

    useEffect(() => {
        if (selected > -1) {
            dispatch(RegionFetch(optionsList[selected]))
            console.log(optionsList[selected])
        }

    }, [dispatch, selected])


    return (
        <div className="container">
            <button type="button"
                aria-haspopup="listbox"
                aria-expanded={expanded}
                onClick={toggleExpand}
            >
                {selected > -1 ? optionsList[selected] : "Filter by Region"}
            </button>

            <ul
                className={`options ${expanded ? "show" : ""}`}
                role="listbox"
            >
                {listRenders}
            </ul>
        </div>
    )
}
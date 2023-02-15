import { useEffect, useState } from "react";

export default function Dropdown(props) {
    let [expanded, setExpanded] = useState(false);
    let [selected, setSelected] = useState(-1);

    const optionsList = [
        "Africa",
        "America",
        "Asia",
        "Europe",
        "Oceania",
    ]

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
                        setSelected(index);
                        setExpanded(false);
                    }}
                >
                    {each}
                </li>
            )
        })

    useEffect(() => {
        if (selected > -1)
            props.fetch(optionsList[selected])
    }, [selected])


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
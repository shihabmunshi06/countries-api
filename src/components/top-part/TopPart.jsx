import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMoon, faLightbulb } from '@fortawesome/free-regular-svg-icons';


export default function TopPart() {
    const [themeMode, setThemeMode] = useState("dark")

    const handleThemeChange = () => {
        if (themeMode === "light") {
            setThemeMode("dark")
        } else {
            setThemeMode("light")
        }

    }
    return (
        <div className="top-part">
            <p>Where in the world</p>
            <div onClick={handleThemeChange} className="theme-mode">
                <FontAwesomeIcon className='theme-icon' icon={themeMode === "dark" ? faMoon : faLightbulb} />
                <p>{themeMode} mode</p>
            </div>
        </div>
    );
}

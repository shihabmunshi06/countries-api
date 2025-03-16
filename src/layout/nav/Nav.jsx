import { useState, useEffect } from 'react';

import { MoonIcon } from './components/MoonIcon';
import { SunIcon } from './components/SunIcon';

import "./nav.scss"

export default function TopPart() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme)
    }, [theme]);

    const handleThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light")

    }
    return (
        <div className="top-part">
            <p>Where in the world</p>
            <div onClick={handleThemeChange} className="theme-mode">
                {theme === "dark" ? <MoonIcon /> : <SunIcon />}
                <p>{theme} mode</p>
            </div>
        </div>
    );
}

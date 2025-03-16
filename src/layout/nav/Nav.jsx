import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { MoonIcon } from './components/MoonIcon';
import { SunIcon } from './components/SunIcon';

import "./nav.scss"

export default function TopPart() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const navigate = useNavigate()

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme)
    }, [theme]);

    const handleThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light")

    }

    const handleClick = () => {
        navigate("/")
    }

    return (
        <div className="top-part">
            <p onClick={handleClick}>Where in the world</p>
            <div onClick={handleThemeChange} className="theme-mode">
                {theme === "dark" ? <MoonIcon /> : <SunIcon />}
                <p>{theme} mode</p>
            </div>
        </div>
    );
}

import { Outlet } from "react-router-dom";

export default function Top() {
    return (
        <>
            <div className="top">
                <h1>Where in the world</h1>
                <p>Dark mode</p>
            </div>
            <Outlet />
        </>

    )
}

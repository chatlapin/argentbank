import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <header>
            <h1>Argent Bank</h1>

            <nav>

                <NavLink to="/"> Home </NavLink>

                <NavLink to="/about">About </NavLink>

            </nav>
        </header>
    )
}

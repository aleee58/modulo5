import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
    <div>
        <ul>
            <li>
                <Link>En cartelera</Link>
            </li>

            <li>
                <Link>Populares</Link>
            </li>

            <li>
                <Link>Mejor Calificados</Link>
            </li>

            <li>
                <Link>Proximamente</Link>
            </li>
        </ul>
    </div>
    )
}

export default NavBar
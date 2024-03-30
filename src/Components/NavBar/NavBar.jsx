import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"
import logo from "../../assets/icon.png"

const NavBar = () => {
    return (
        <ul className={styles.container}>
            <li>
                <img src={logo} className="logo" alt="" />
            </li>
            

            <li>
                <Link className={styles.link} to={"now_playing"}>En cartelera</Link>
            </li>

            <li>
                <Link className={styles.link} to={"popular"}>Populares</Link>
            </li>

            <li>
                <Link className={styles.link} to={"top_related"}>Mejor Calificados</Link>
            </li>

            <li>
                <Link className={styles.link} to={"upcoming"}>Proximamente</Link>
            </li>
        </ul>
    )
}

export default NavBar
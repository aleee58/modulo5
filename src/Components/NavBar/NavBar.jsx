import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css"
import logo from "../../assets/icon.png"

const NavBar = () => {

    const location = useLocation();

    return (
        <ul className={styles.container}>
            <li>
                <img src={logo} className={styles.logo} alt="" />
            </li>
            

            <li>
                <Link className={styles.link} to={"now_playing"} style={{color: location.pathname === "/home/now_playing" ? "white": undefined}}>En cartelera</Link>
            </li>

            <li>
                <Link className={styles.link} to={"popular"} style={{color: location.pathname === "/home/popular" ? "white": undefined}}>Populares</Link>
            </li>

            <li>
                <Link className={styles.link} to={"top_related"} style={{color: location.pathname === "/home/top_related" ? "white": undefined}}>Mejor Calificados</Link>
            </li>

            <li>
                <Link className={styles.link} to={"upcoming"} style={{color: location.pathname === "/home/upcoming" ? "white": undefined}}>Proximamente</Link>
            </li>
          
        </ul>
    )
}

export default NavBar
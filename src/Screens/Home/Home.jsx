import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

const Home = () => {
    return (
    <div>
       <NavBar/>
    <Outlet/>
    <h1>aqui da</h1>
    </div>
    )   
}

export default Home
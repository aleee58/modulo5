import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
    <div>
        <h1>AQui va</h1>
    <Outlet/>
    <h1>aqui da</h1>
    </div>
    )   
}

export default Home
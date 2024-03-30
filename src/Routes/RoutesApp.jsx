import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Screens/Home/Home";
import Upcoming from "../Screens/Upcoming/Upcoming";
import TopRelated from "../Screens/TopRelated/TopRelated";
import Popular from "../Screens/Popular/Popular";
import NowPlaying from "../Screens/NowPlaying/NowPlaying";

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/home/now_playing"} />} />
            <Route path="/home" element={<Home />}>
                <Route path="now_playing" element={<NowPlaying/>}/>
                <Route path="popular" element={<Popular/>}/>
                <Route path="top_related" element={<TopRelated/>}/>
                <Route path="upcoming" element={<Upcoming/>}/>

            </Route>
            <Route path="*" element={<Navigate to="/home/now_playing" />} />
        </Routes>
    )
}

export default RoutesApp
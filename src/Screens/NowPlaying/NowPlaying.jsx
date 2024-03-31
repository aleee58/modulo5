import React, { useEffect, useState } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";
import styles from "./NowPlaying.module.css"
import { DataProvider } from "../../Utils/DataProvider";
import Loader from "../../Components/Loader/Loader";
import Pagination from "../../Components/Pagination/Pagination";

const NowPlaying = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState (false);
    const [page, setPage] = useState(1);

    const getMovies = () => {
        setLoading(true)
        DataProvider.getNowPlayingMovies(page)
        .then((res) => {
            console.log(res)
        setMovies(res.results)
        })
        .catch(err =>{
           console. log(err);
           alert("Error al cargar las peliculas")
        })
        .finally(() => setLoading(false))
    }

    useEffect(() => {
            getMovies()
    }, [page])

    return (
        <div className={styles.container}>
            <h1>Ahora en cartelera</h1>
            {
                loading ?
                <Loader/>
                :
                <CardContainer movies={movies} />       
            }
            <Pagination page={page} setPage={setPage} />
        </div>
    );
}

export default NowPlaying;
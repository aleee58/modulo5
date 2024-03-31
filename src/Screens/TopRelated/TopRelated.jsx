import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import CardContainer from "../../Components/CardContainer/CardContainer"
import { DataProvider } from "../../Utils/DataProvider";
import styles from "./TopRelated.module.css"

const TopRelated = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] =useState(false);

    const getMovies = () =>{
        setLoading(true)
        DataProvider.getTopRelatedMovies(page)
        .then((res) => {
            console.log(res)
            setMovies(res.results)
        })
        .catch(err => {
            console.log(err)
            alert("error al cargar las peliculas")
        })
        .finally(() => setLoading(false))
    }

    useEffect(() => {
        getMovies()
    },[page])

    return (
        <div className={styles.container}>
        <h1>Mejor calificados</h1>
        {
            loading ?
            <Loader/>
            :
            <CardContainer movies={movies}/>       
        }

    </div>
    );
}

export default TopRelated;
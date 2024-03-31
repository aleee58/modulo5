import React from "react";
import Card from "../Card/Card";
import styles from "./CardContainer.module.css"


const CardContainer = ({movies}) => {
    return (
        <>
        <div className={styles.container}>
           {
                movies.map((e, i) => <Card movie={e} key={i}/>)

           }
           </div>
        </>
    )
}

export default CardContainer
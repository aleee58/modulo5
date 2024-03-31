import styles from "./Pagination.module.css"
import React, { useState } from "react";

const Pagination = ({page, setPage}) => {
    
    const handleClick = (type) => {
            if (type === "sumar"){
                setPage(page + 1)
            } else if (type === "restar") {
                page > 1 && setPage(page - 1)
            } else return
    }

    const handleEnter = (e) => {
        if(e.key==="Enter"){
            if(Number (actualPage) <= maxPage){
            setPage(actualPage)
        } else {
            alert("el numero maximo de paginas es: " + maxPage)
        }

        }

    }
    const[actualPage, setActualPage] = useState(page);
    const handleChange = (e) => {
        setActualPage(e.target.value)
    }

    return ( 
        <div className={styles.container}>
            <button className={styles.btn} onClick={() => handleClick("restar")}>-</button>
            <input type="text" className={styles.input} maxLength={4} value={page.page} />
            <button className={styles.btn} onClick={() => handleClick("sumar")}>+</button>
        </div>
    )
}

export default Pagination
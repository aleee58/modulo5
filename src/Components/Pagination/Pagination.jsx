import styles from "./Pagination.module.css"

const Pagination = (page, setPage) => {
    
    const handleClick = (type) => {
            if (type === "suma"){

            } else if (type == "restar") {

            } else return



    }
    return ( 
        <div className={styles.container}>
            <button className={styles.btn}>-</button>
            <input type="text" className={styles.input} maxLength={4} value={page}/>
            <button className={styles.btn}>+</button>
        </div>
    )
}

export default Pagination
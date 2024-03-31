import styles from "./Pagination.module.css"

const Pagination = ({page, setPage}) => {
    
    const handleClick = (type) => {
            if (type === "sumar"){
                setPage(page + 1)
            } else if (type === "restar") {
                page > 1 && setPage(page - 1)
            } else return
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
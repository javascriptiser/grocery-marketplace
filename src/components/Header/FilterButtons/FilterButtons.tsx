import styles from "./FilterButtons.module.css"


export const FilterButtons = () => {
    return <div className={styles.container}>
            <button className={styles.button}>Sort by</button>
            <button className={styles.button}>Location</button>
            <button className={styles.button}>Category</button>
    </div>
}
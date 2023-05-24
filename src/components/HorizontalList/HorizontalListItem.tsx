import styles from "./HorizontalListItem.module.css"

// @ts-ignore
export const HorizontalListItemWrapper = ({children}) => {
    return <div className={styles.card}>{children}</div>
}
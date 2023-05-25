import {FC} from "react";
import styles from "./CardMenuItem.module.css"

interface CardMenuItemProps {
    text: string,
    imgUrl?: string,
}

export const CardMenuItem: FC<CardMenuItemProps> = ({text, imgUrl}) => {

    return <>
        <div className={styles.wrapper}>
            <div className={styles.container}
                 style={{backgroundColor: `rgba(0, 0, 0)`, backgroundImage: `url(${imgUrl}`}}>
            </div>
            <span className={styles.text}>{text}</span>
        </div>
    </>
}
import styles from "./Header.module.css"
import cartIcon from "../../assets/cartIcon.svg";
import backArrowIcon from "../../assets/backArrowIcon.svg";
import favoritesIcon from "../../assets/favoritesIcon.svg";
import {PropsWithChildren} from "react";


interface HeaderProps {
    text?: string,
    withIcons?: boolean,
    withBackArrowIcon?: boolean,
}

export const Header = (props: PropsWithChildren<HeaderProps>) => {

    const {
        text = "Groceries",
        withIcons = true,
        withBackArrowIcon = false,
        children
    } = props


    return <div
        className={styles.container}
    >
        <div className={styles.row}>
            {withBackArrowIcon && <><img src={backArrowIcon} alt="back arrow" className={styles.backArrowIcon}/></>}

            <div
                className={styles.textContainer}
                style={{textAlign: withIcons ? "inherit" : "center"}}
            >
                <a style={{margin: "0 auto"}}>{text}</a>
            </div>

            {withIcons && <div className={styles.iconsContainer}>
                <img src={favoritesIcon} alt="favorites"/>
                <img src={cartIcon} alt="cart"/>
            </div>}
        </div>
        {children}
    </div>
}
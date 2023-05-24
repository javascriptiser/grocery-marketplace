import styles from "./FilterButtons.module.css"
import {Button} from "../../Common/Button/Button.tsx";
import sortDownIcon from "../../../assets/sortDownIcon.svg"
import locationIcon from "../../../assets/locationIcon.svg"
import categoryIcon from "../../../assets/categoryIcon.svg"


export const FilterButtons = () => {
    return <div className={styles.container}>
        <Button text={"Sort by"}  src={sortDownIcon}/>
        <Button text={"Location"} src={locationIcon}/>
        <Button text={"Category"} src={categoryIcon}/>
    </div>
}
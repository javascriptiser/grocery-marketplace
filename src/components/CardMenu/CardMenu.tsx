import {CardMenuItem} from "./CardMenuItem.tsx";
import styles from "./CardMenu.module.css"

const arr = [
    {text: "Beverages", src: "/Beverages.svg"},
    {text: "Bread & Bakery", src: undefined},
    {text: "Vegetables", src: "/Vegetables.svg"},
    {text: "Fruits", src: "/Fruits.svg"},
    {text: "Egg", src: "/Egg.svg"},
    {text: "FrozenVeg", src: "/FrozenVeg.svg"},
    {text: "HomeCare", src: "/HomeCare.svg"},
    {text: "PetCare", src: "/PetCare.svg"},
]
export const CardMenu = () => {
    return <div className={styles.container}>
        {arr.map((item) => {
            return <CardMenuItem text={item.text} imgUrl={item.src}/>
        })}
    </div>
}
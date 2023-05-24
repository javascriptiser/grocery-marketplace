import styles from "./FirstHorizontalListItem.module.css"
import {Button} from "../Common/Button/Button.tsx";

export const FirstHorizontalListItem = () => {
    return <div className={styles.container}>
        <div className={styles.card}>
            <span className={styles.text}>
            Ready to deliver to your home
            </span>
            <Button text={"start shopping"}
                    customStyles={{
                        textStyles: {
                            textTransform: "uppercase",
                            width: 147
                        }
                    }}
            />
        </div>
    </div>
}
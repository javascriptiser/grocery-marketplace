import {CSSProperties, FC} from "react";
import styles from "./Button.module.css"

interface ButtonProps {
    text: string,
    src?: any,
    alt?: string,
    customStyles?: {
        iconStyles?: CSSProperties,
        textStyles?: CSSProperties,
    }
}

export const Button: FC<ButtonProps> = (props) => {
    const {text, src, alt = "icon", customStyles} = props;

    return <button
        className={styles.button}
        style={customStyles?.textStyles}
    >
        {src && <img
            src={src}
            alt={alt}
            style={customStyles?.iconStyles}
        />}
        {text}
    </button>
}
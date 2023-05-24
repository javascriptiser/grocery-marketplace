import searchIcon from "../../../assets/searchIcon.svg"
import styles from "./SearchInput.module.css"

interface SearchInputProps {
    placeholder?: string,
}

export const SearchInput = (props: SearchInputProps) => {
    const {placeholder = "Search Product"} = props;

    return <div className={styles.container}>
        <img src={searchIcon} alt="search icon" className={styles.icon}/>
        <input
            type="text"
            className={styles.input}
            placeholder={placeholder}
        />
    </div>
}
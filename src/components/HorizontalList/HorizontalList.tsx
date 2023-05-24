import style from './HorizontalList.module.css'
import {Children, cloneElement, isValidElement} from "react";

// @ts-ignore
export const HorizontalList = ({children}) => {
    const mapped = Children.map(children, (child) => {
        if (isValidElement(child)) {
            return cloneElement(child, {
                // @ts-ignore
                ...child.props,
            })
        }
        return null
    })

    return <div className={style.cards}>
        {mapped}
    </div>
}
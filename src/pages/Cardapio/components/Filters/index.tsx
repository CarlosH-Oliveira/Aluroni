import { Dispatch, SetStateAction } from "react"
import filters from "./filters.json"
import styles from "./Filters.module.scss"

type props = {
    filter:number|null,
    setFilter: Dispatch<SetStateAction<number | null>>
}

type filter = typeof filters[0]

export default function Filters ({filter, setFilter}:props) {

    return(
        <>
            <div className={styles.filters}>
                {filters.map((item:any, key:any) => (
                    <button key={item.id} onClick={event => filter === item.id?setFilter(null):setFilter(item.id)} className={filter===item.id?styles.filters__buttonOptionActive:styles.filters__buttonOption}>
                        {item.label}
                    </button>
                ))}
            </div>
        </>
    )
}
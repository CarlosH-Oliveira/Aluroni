import { Dispatch, SetStateAction } from "react"
import styles from "./Finder.module.scss"
import { CgSearch } from "react-icons/cg"

type props = {
    searchText:string
    setSearchText: Dispatch<SetStateAction<string>>
}
export default function Finder ({searchText, setSearchText}:props) {
    return (
        <>
        <div className={styles.finder}>
            <input className={styles.finder__input} type="text" value={searchText} onChange={event => setSearchText(event.target.value)} placeholder="Pesquise seu produto aqui..."/>
            <CgSearch size={20} className={styles.finder__icon}/>
        </div>  
        </>
    )
}
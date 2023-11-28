import { useEffect, useState } from "react"
import Item from "./components/Item"
import itens from "./itens.json"
import styles from "./Itens.module.scss"

export default function Itens () {
    
    return(
        <>
        <div className={styles.menu}>
            {
                itens.map((item:any, key:any) => (
                    <Item item={item} key={key}/>
                ))
            }
        </div>
        </>
    )
}
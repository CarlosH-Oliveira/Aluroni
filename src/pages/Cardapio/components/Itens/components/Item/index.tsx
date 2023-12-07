import { useEffect, useState } from "react"
import styles from "./Item.module.scss"

type props = {
    item:any
}
export default function Item ({item}:props) {
    const[backgroundColor, setBackgroundColor] = useState("")
    useEffect(function(){
        if(item.category.label === "Massas"){
            setBackgroundColor("#f7d454")
        }else if(item.category.label === "Carnes"){
            setBackgroundColor("#ff5d3d")
        }else if(item.category.label === "Combos"){
            setBackgroundColor("#7d66ff")
        }else if(item.category.label === "Veganos"){
            setBackgroundColor("#7affba")
        }
    })
    
    return (
        <>
        <div className={styles.item}>
            <div className={styles.item__main}>
                <div className={styles.item__header}>
                    <img className={styles.item__img} src={item.photo} alt="..." />
                    <h2>{item.title}</h2>
                </div>
                <div className={styles.item__desc}>
                    <p>{item.description}</p>
                    <div className={styles.item__tags}>
                        <div className={styles.item__tags__type} style={{"backgroundColor":backgroundColor}}>
                            Categoria: {item.category.label}
                        </div>
                        <div className={styles.item__tags__portion}>
                            Porção: {item.size} gramas
                        </div>
                        <div className={styles.item__tags__serving}>
                            {item.serving > 1?"Serve até "+item.serving+" pessoas":"Serve "+item.serving+" pessoa"}
                        </div>
                        <div className={styles.item__tags__price}>
                            Preço: {item.price} R$
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}
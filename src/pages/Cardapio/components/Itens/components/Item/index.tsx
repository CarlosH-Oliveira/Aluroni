import styles from "./Item.module.scss"

type props = {
    item:any
}
export default function Item ({item}:props) {
    return (
        <>
        <div className={styles.item}>
            <div className={styles.item__header}>
                <img className={styles.item__img} src="https://static.vecteezy.com/system/resources/previews/021/495/996/original/chatgpt-openai-logo-icon-free-png.png" alt="..." />
                <h2>{item.title}</h2>
            </div>
            <div className={styles.item__desc}>
                <p><i>{item.description}</i></p>
            </div>
            <div className={styles.item__tags}>
                <div className={styles.item__tags__type}>
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
        </>
    )
}
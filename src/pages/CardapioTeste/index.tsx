import styles from "./CardapioTeste.module.scss"

export default function CardapioTeste () {
    return (
        <>
            <nav className={styles.navBar}>
                <div className={styles.navBar__menu}>
                    <img src="https://static.vecteezy.com/system/resources/previews/021/495/996/original/chatgpt-openai-logo-icon-free-png.png" alt="..." className={styles.navBar__logo}/>
                    <text className={styles.navBar__title}>Aluroni</text>
                </div>
                
            </nav>
            <main className={styles.main}>
                <div className={styles.main__card}>
                    <img src="https://static.vecteezy.com/system/resources/previews/021/495/996/original/chatgpt-openai-logo-icon-free-png.png" alt="..." className={styles.main__card__img}/>
                    <h3 className={styles.main__card__title}>Título do Card</h3>
                    <p className={styles.main__card__text}>Descrição do card</p>
                </div>
                <div className={styles.main__card}>
                    <img src="https://static.vecteezy.com/system/resources/previews/021/495/996/original/chatgpt-openai-logo-icon-free-png.png" alt="..." className={styles.main__card__img}/>
                    <h3 className={styles.main__card__title}>Título do Card</h3>
                    <p className={styles.main__card__text}>Descrição do card</p>
                </div>
                <div className={styles.main__card}>
                    <img src="https://static.vecteezy.com/system/resources/previews/021/495/996/original/chatgpt-openai-logo-icon-free-png.png" alt="..." className={styles.main__card__img}/>
                    <h3 className={styles.main__card__title}>Título do Card</h3>
                    <p className={styles.main__card__text}>Descrição do card</p>
                </div>
                <div className={styles.main__card}>
                    <img src="https://static.vecteezy.com/system/resources/previews/021/495/996/original/chatgpt-openai-logo-icon-free-png.png" alt="..." className={styles.main__card__img}/>
                    <h3 className={styles.main__card__title}>Título do Card</h3>
                    <p className={styles.main__card__text}>Descrição do card</p>
                </div>
                <div className={styles.main__card}>
                    <img src="https://static.vecteezy.com/system/resources/previews/021/495/996/original/chatgpt-openai-logo-icon-free-png.png" alt="..." className={styles.main__card__img}/>
                    <h3 className={styles.main__card__title}>Título do Card</h3>
                    <p className={styles.main__card__text}>Descrição do card</p>
                </div>
            </main>
        </>
    )
}
import { useEffect, useState } from "react"
import styles from "./Cardapio.module.scss"
import Finder from "./components/Finder/Index"
import Filters from "./components/Filters"
import Orderer from "./components/Orderer"
import Itens from "./components/Itens"

export default function Cardapio () {

    const [searchText, setSearchText] = useState("")
    const [filter, setFilter] = useState<number|null>(null)
    const [orderer, setOrderer] = useState<string|null>(null)
    const [blockHeader, setBlockHeader] = useState("hidden")

    useEffect(function(){
        console.log(orderer)
    }, [orderer])
    
    useEffect(function(){
        const scrollListener = () =>{
          if(window.scrollY > 150){
            setBlockHeader("header")
          }else{
            setBlockHeader("hidden")
          }
    
        }
        window.addEventListener("scroll", scrollListener)

        return () => {
            window.removeEventListener("scroll", scrollListener)
        }
    },[])

    return (
        <>
            <nav className={styles.navBar}>
                <div className={blockHeader==="hidden"?styles.navBar__hidden:styles.navBar__menu}>
                    <img src="https://static.vecteezy.com/system/resources/previews/021/495/996/original/chatgpt-openai-logo-icon-free-png.png" alt="..." className={blockHeader==="hidden"?styles.navBar__hidden:styles.navBar__logo}/>
                    <text className={blockHeader==="hidden"?styles.navBar__hidden:styles.navBar__title}>Aluroni</text>
                </div>
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa!
                </div>
            </header>
            <main className={styles.main}>
                <section className={styles.menu}>
                    <text className={styles.menu__title}>Menu</text>
                    <Finder searchText={searchText} setSearchText={setSearchText}/>
                    <div className={styles.menu__filters}>
                        <Filters filter={filter} setFilter={setFilter}/>
                    </div>
                </section>
                <Orderer orderer={orderer} setOrderer={setOrderer}/>
                <Itens />
            </main>
        </>
    )
}
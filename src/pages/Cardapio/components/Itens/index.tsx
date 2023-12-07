import { useEffect, useState } from "react"
import Item from "./components/Item"
import itens from "./itens.json"
import styles from "./Itens.module.scss"

type props = {
    searchText:string,
    filter:number|null,
    orderer:string|null
}

export default function Itens (props:props) {
    const [itensList, setItensList] = useState(itens)
    const {searchText, filter, orderer} = props

    const testSearchText = (title: string) => {
        const regex = new RegExp(searchText, 'i');
        return regex.test(title);
    }
    
    const testFilter = (id: number) => {
        if(filter !== null) return filter === id;
        return true;
    }

    const orderList = (newList: typeof itens) => {
        if(orderer === "porcao"){
            return newList.sort((item, nextItem) => item.size > nextItem.size? -1 : 1)
        }
        if(orderer === "qtd_pessoas"){
            return newList.sort((item, nextItem) => item.serving > nextItem.serving? -1 : 1)
        }
        if(orderer === "preco"){
            return newList.sort((item, nextItem) => item.price > nextItem.price? -1 : 1)
        }
        return newList
    }

    useEffect(function(){

        const newList = itens.filter(item => testSearchText(item.title) && testFilter(item.category.id));
        setItensList(orderList(newList));    
    }, [searchText, filter, orderer])

    return(
        <>
        <div className={styles.menu}>
            {
                itensList.map((item:any, key:any) => (
                    <Item item={item} key={key}/>
                ))
            }
        </div>
        </>
    )
}
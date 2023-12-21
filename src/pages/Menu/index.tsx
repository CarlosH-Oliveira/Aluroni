import { useEffect, useState } from "react";
import styles from "./Menu.module.scss";
import Finder from "./components/Finder/Index";
import Filters from "./components/Filters";
import Orderer from "./components/Orderer";
import Itens from "./components/Itens";

export default function Menu () {

	const [searchText, setSearchText] = useState("");
	const [filter, setFilter] = useState<number|null>(null);
	const [orderer, setOrderer] = useState<string|null>(null);

	useEffect(function(){
		console.log(orderer);
	}, [orderer]);

	useEffect(function(){
		console.log(filter);
	}, [filter]);

	useEffect(function(){
		console.log(searchText);
	}, [searchText]);

	return (
		<>
			<main className={styles.main}>
				<section className={styles.menu}>
					<span className={styles.menu__title}>Menu</span>
					<Finder searchText={searchText} setSearchText={setSearchText}/>
					<div className={styles.menu__filters}>
						<Filters filter={filter} setFilter={setFilter}/>
					</div>
				</section>
				<Orderer orderer={orderer} setOrderer={setOrderer}/>
				<Itens searchText={searchText} filter={filter} orderer={orderer}/>
			</main>
		</>
	);
}
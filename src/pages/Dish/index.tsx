import { FunctionComponent, useState } from "react";
import styles from "./Dish.module.scss";
import itens from "data/menu.json";
import {useParams } from "react-router-dom";
import { dish } from "types/dish";
import NotFound from "pages/NotFound";
import Default from "pages/Default";

const Dish: FunctionComponent = () => {
	const [id, setId] = useState(useParams().id);
	let dish:dish | undefined;
	if(id !== undefined){
		dish = itens.find(item => item.id == parseInt(id));
		if(dish!==undefined){
			const label = dish.category.label;
			return (
				<Default>
					<div className={styles.main}>
						<section className={styles.container}>
							<h1 className={styles.title}>
								{dish.title}
							</h1>
							<div className={styles.image}>
								<img src={dish.photo} alt={dish.title} />
							</div>
							<div className={styles.content}>
								<p className={styles.content__description}>
									{dish.description}
								</p>
								<div className={styles.tags}>
									<div className={styles["tags__type__"+label.toLowerCase()]}>
										{dish.category.label}
									</div>
									<div className={styles.tags__portion}>
										{dish.size}g
									</div>
									<div className={styles.tags__serving}>
											Serve {dish.serving} pessoa{dish.serving == 1 ? "" : "s"}
									</div>
									<div className={styles.tags__price}>
										R$ {dish.price.toFixed(2)}
									</div>
								</div>
							</div>
						</section>
					</div>
				</Default>
			);
		}else{
			return <NotFound/>;
		}
	}else{
		return <NotFound/>;
	}
};
 
export default Dish;
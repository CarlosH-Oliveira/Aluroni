import { FunctionComponent } from "react";
import itens from "data/menu.json";
import styles from "./Start.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { dish } from "types/dish";

const Start: FunctionComponent= () => {
	const recommendedDishes = [...itens].sort(() => 0.5 - Math.random()).splice(0, 3);
	const navigate = useNavigate();
	const details = (dish:dish) => {
		navigate("/prato/"+dish.id, {state:{...dish}, replace:true});
	};
	return (
		<>
			<section className={styles.main}>
				<h3 className={styles.welcome}>Seja muito bem-vindo à nossa loja!</h3>
				<div className={styles.title__container}>
					<h3 className={styles.title}>Recomendações da cozinha </h3>
					<Link to="/menu" className={styles.title__menu}>Ir para o cardápio</Link>
				</div>
				<div className={styles.recommended}>
					{
						recommendedDishes.map((item:any)=>(
							<div className={styles.recommended__item} key={item.id}>
								<div className={styles.recommended__item__img__container}>
									<img src={item.photo} alt={item.title} className={styles.recommended__item__img}/>
								</div>
								<div className={styles.recommended__item__details__container}>
									<button className={styles.recommended__item__details} onClick={() => {details(item);}}>
									Ver mais
									</button>
								</div>
							</div>
						))
					}
				</div>
				
			</section>
		</>
	);
};
 
export default Start;
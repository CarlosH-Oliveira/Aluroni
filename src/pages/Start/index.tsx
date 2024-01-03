import { FunctionComponent } from "react";
import itens from "data/menu.json";
import "./Start.css";
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
			<section className="start-main flex-column">
				<h2 className="welcome">Seja muito bem-vindo à nossa loja!</h2>
				<div className="title__container">
					<h3 className="title">Recomendações da cozinha </h3>
					<Link to="/menu" className="title__navigate">Ir para o cardápio</Link>
				</div>
				<div className="recommended flex-column">
					{
						recommendedDishes.map((item:any)=>(
							<div className="item flex-column" key={item.id}>
								<img src={item.photo} alt={item.title} className="item-img"/>
								<button className="item__details" onClick={() => {details(item);}}>
									Ver mais
								</button>
							</div>
						))
					}
				</div>
				
			</section>
		</>
	);
};
 
export default Start;
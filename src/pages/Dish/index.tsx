import { FunctionComponent, useEffect, useState } from "react";
import "./Dish.css";
import itens from "data/menu.json";
import {useParams } from "react-router-dom";
import { dish } from "types/dish";
import NotFound from "pages/NotFound";
import Default from "pages/Default";

const Dish: FunctionComponent = () => {
	const [color, setColor] = useState("fff");
	const [id, setId] = useState(useParams().id);
	let dish:dish | undefined;

	useEffect(function(){
		if(id !== undefined){
			dish = itens.find(item => item.id == parseInt(id));
			if(dish!==undefined){
				if(dish.category.label === "Massas"){
					setColor("#f7d454");
				}else if(dish.category.label === "Carnes"){
					setColor("#ff5d3d");
				}else if(dish.category.label === "Combos"){
					setColor("#7d66ff");
				}else if(dish.category.label === "Veganos"){
					setColor("#7affba");
				}
			}
		}
	},[]);
	
	if(id !== undefined){
		dish = itens.find(item => item.id == parseInt(id));
		if(dish!==undefined){
			return (
				<Default>
					<div className="dish-main">
						<section className="dish-container">
							<h1 className="dish-title">
								{dish.title}
							</h1>
							<img src={dish.photo} alt={dish.title} className="dish-image"/>
							<div className="dish-content">
								<p className="dish-content-description">
									{dish.description}
								</p>
								<div className="tags">
									<div className="tag type" style={{backgroundColor: color}}>
										{dish.category.label}
									</div>
									<div className="tag portion">
										{dish.size}g
									</div>
									<div className="tag serving">
										Serve {dish.serving} pessoa{dish.serving == 1 ? "" : "s"}
									</div>
									<div className="tag price">
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
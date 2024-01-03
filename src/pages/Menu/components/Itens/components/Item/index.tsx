import { useEffect, useState } from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";
import { dish } from "types/dish";

type props = {
    item:dish
}
export default function Item ({item}:props) {
	const[backgroundColor, setBackgroundColor] = useState("");
	const navigate = useNavigate();

	useEffect(function(){
		if(item.category.label === "Massas"){
			setBackgroundColor("#f7d454");
		}else if(item.category.label === "Carnes"){
			setBackgroundColor("#ff5d3d");
		}else if(item.category.label === "Combos"){
			setBackgroundColor("#7d66ff");
		}else if(item.category.label === "Veganos"){
			setBackgroundColor("#7affba");
		}
	});

	const details = (dish:dish) => {
		navigate("/prato/"+dish.id, {state:{...dish}, replace:true});
	};
    
	return (
		<>
			<div className="menu-item" onClick={() => details(item)}>
				<div className="item__main">
					<div className="item__header">
						<img className="menu-item__img" src={item.photo} alt="..." />
						<h2 className="item__header-title">{item.title}</h2>
					</div>
					<div className="item__desc">
						<p>{item.description}</p>
						<div className="item-tags">
							<div className="item-tag type" style={{"backgroundColor":backgroundColor}}>
                            Categoria: {item.category.label}
							</div>
							<div className="item-tag portion">
                            Porção: {item.size} gramas
							</div>
							<div className="item-tag serving">
								{item.serving > 1?"Serve até "+item.serving+" pessoas":"Serve "+item.serving+" pessoa"}
							</div>
							<div className="item-tag price">
                            Preço: {item.price} R$
							</div>
						</div>
					</div>
				</div>
            
			</div>
		</>
	);
}
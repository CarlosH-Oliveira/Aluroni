import { Dispatch, SetStateAction, useState } from "react";
import "./Orderer.css";
import options from "./options.json";
import arrow from "./arrow-icon.png";
import arrow_up from "./arrow-up-icon.png";

type props = {
    orderer: string|null,
    setOrderer: Dispatch<SetStateAction<string | null>>
}

export default function Orderer ({orderer, setOrderer}:props) {
	const [open, setOpen] = useState<boolean>(false);

	const handleOpen = () => {
		if(open===false){
			setOpen(true);
		}else{
			setOpen(false);
		}
	};

	const handleOrderer = (selectedOrderer:string) => {
		if(selectedOrderer === orderer){
			setOrderer(null);
		}else{
			setOrderer(selectedOrderer);
		}
	};

	return (
		<>
			<div className="orderer">
				<button className="toggle__orderer">
					<span className="orderer__title" onClick={event => handleOpen()}>Ordenar por</span>
					{open === true?<img src={arrow_up} className={"orderer__title__icon"} onClick={event => handleOpen()}/>:<img src={arrow} className={"orderer__title__icon"} onClick={event => handleOpen()}/>}
				</button>
				<div className={open===true?"orderer__options__active":"orderer__options"}>
					{options.map((item:any, key:any) => (
						<button className={orderer===item.value?"orderer__option__active":"orderer__option"} key={item.value} onClick={event => handleOrderer(item.value)}>
							{item.name}
						</button>  
					))}
				</div>
			</div>
		</>
	);
}
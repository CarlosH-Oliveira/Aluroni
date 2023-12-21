import { Dispatch, SetStateAction, useState } from "react";
import styles from "./Orderer.module.scss";
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
			<button className={styles.orderer}>
				<span className={styles.orderer__title} onClick={event => handleOpen()}>Ordenar por </span> {open === true?<img src={arrow_up} className={styles.orderer__title__icon} onClick={event => handleOpen()}/>:<img src={arrow} className={styles.orderer__title__icon} onClick={event => handleOpen()}/>}
				<div className={open===true?styles.orderer__options__active:styles.orderer__options}>
					{options.map((item:any, key:any) => (
						<div className={orderer===item.value?styles.orderer__option__active:styles.orderer__option} key={item.value} onClick={event => handleOrderer(item.value)}>
							{item.name}
						</div>  
					))}
				</div>
			</button>
		</>
	);
}
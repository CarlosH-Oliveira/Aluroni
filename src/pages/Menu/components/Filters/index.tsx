import { Dispatch, SetStateAction } from "react";
import filters from "data/filters.json";
import "./Filters.css";

type props = {
    filter:number|null,
    setFilter: Dispatch<SetStateAction<number | null>>
}

export default function Filters ({filter, setFilter}:props) {

	return(
		<>
			<div className="filters">
				{filters.map((item:any) => (
					<button key={item.id} onClick={() => filter === item.id?setFilter(null):setFilter(item.id)} className={filter===item.id?"filters__buttonOptionActive":"filters__buttonOption"}>
						{item.label}
					</button>
				))}
			</div>
		</>
	);
}
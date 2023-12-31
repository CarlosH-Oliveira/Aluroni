import { Dispatch, SetStateAction } from "react";
import "./Finder.css";
import { CgSearch } from "react-icons/cg";

type props = {
    searchText:string
    setSearchText: Dispatch<SetStateAction<string>>
}
export default function Finder ({searchText, setSearchText}:props) {
	return (
		<>
			<div className="finder">
				<input className="finder-input" type="text" value={searchText} onChange={event => setSearchText(event.target.value)} placeholder="Pesquise seu produto aqui..."/>
				<CgSearch size={20} className="finder-icon"/>
			</div>  
		</>
	);
}
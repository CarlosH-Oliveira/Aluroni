import { FunctionComponent } from "react";
import "./Header.css";

const Header: FunctionComponent = () => {
	return (
		<>
			<header className="header">
				<div className="header__text">
                    A casa do código e da massa!
				</div>
			</header>
		</>
	);
};
 
export default Header;
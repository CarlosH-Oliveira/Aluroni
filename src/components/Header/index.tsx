import { FunctionComponent } from "react";
import styles from "./Header.module.scss";

const Header: FunctionComponent = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__text}>
                    A casa do código e da massa!
				</div>
			</header>
		</>
	);
};
 
export default Header;
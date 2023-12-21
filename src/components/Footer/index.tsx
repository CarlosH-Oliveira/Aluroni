import { FunctionComponent } from "react";
import styles from "./Footer.module.scss";
const Footer: FunctionComponent = () => {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.footer__container}>
					<h2>Rua Comendador Soares</h2>
					<p>Nova Iguaçu - RJ</p>
				</div>
			</footer> 
		</>
	);
};
 
export default Footer;
import { FunctionComponent, useEffect, useState } from "react";
import styles from "./NavBar.module.scss";
import { Link, useNavigate } from "react-router-dom";

const NavBar: FunctionComponent = () => {

	const [routes, setRoutes] = useState(
		[
			{
				label: "Início",
				to: "/"
			},
			{
				label: "Cardápio",
				to: "/menu"
			},
			{
				label: "Sobre",
				to: "/about"
			}
		]
	);

	const navigate = useNavigate();

	return (
		<>
			<nav className={styles.navBar}>
				<div className={styles.navBar__menu}>
					<img src="https://static.vecteezy.com/system/resources/previews/021/495/996/original/chatgpt-openai-logo-icon-free-png.png" alt="..." className={styles.navBar__logo}/>
					<span className={styles.navBar__title}>Aluroni</span>
					<div className={styles.navBar__menu__routes}>
						{routes.map((route:any) => (
							<div key={route.label} className={styles.navBar__menu__routes__route}>
								<Link to={route.to} className={styles.navBar__menu__routes__link}>{route.label}</Link>
							</div>
						))}
						<button onClick={() => navigate(-1)} className={styles.navBar__menu__return}>{"< Voltar"}</button>
					</div>
				</div>
			</nav>
		</>
	);
};
 
export default NavBar;
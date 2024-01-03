import { FunctionComponent, useEffect, useState } from "react";
import "./NavBar.css";
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
			<nav className="navBar">
				<div className="navBar__main">
					<img src="https://static.vecteezy.com/system/resources/previews/021/495/996/original/chatgpt-openai-logo-icon-free-png.png" alt="..." className="navBar__logo"/>
					<h1 className="navBar__title">Aluroni</h1>
				</div>
				<div className="navBar__routes">
					{routes.map((route:any) => (
						<div key={route.label} className="navBar__route">
							<Link to={route.to} className="navBar__link">{route.label}</Link>
						</div>
					))}
				</div>
				<div onClick={() => navigate(-1)} className="navBar-return">{"< Voltar"}</div>
			</nav>
		</>
	);
};
 
export default NavBar;
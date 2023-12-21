import About from "pages/About";
import Default from "pages/Default";
import Dish from "pages/Dish";
import Menu from "pages/Menu";
import NotFound from "pages/NotFound";
import Start from "pages/Start";
import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router: FunctionComponent = () => {
	return ( 
		<Routes>
			<Route path="/" element={<Default/>}>
				<Route index element={<Start/>}/>
				<Route path="menu" element={<Menu/>}/>
				<Route path="about" element={<About/>}/>
			</Route>
			<Route path="*" element={<NotFound/>}/>
			<Route path="prato/:id" element={<Dish/>}/>
		</Routes>
	);
};
 
export default Router;
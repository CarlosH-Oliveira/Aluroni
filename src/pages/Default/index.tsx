import { FunctionComponent } from "react";
import Header from "components/Header";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer";

type DefaultProps = {
	children?: React.ReactNode; //👈 children prop typr
  };

const Default: FunctionComponent<DefaultProps> = ({children}) => {
	return (
		<>
			<Header />
			<Outlet />
			{children}
			<Footer />
		</>
	);
};
 
export default Default;
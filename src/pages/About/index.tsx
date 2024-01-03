import { FunctionComponent } from "react";
import "./About.css";
import casa from "./assets/casa.png";
import massa1 from "./assets/massa1.png";
import massa2 from "./assets/massa2.png";

const About: FunctionComponent = () => {

	return (
		<>
			<section className="about-main">
				<div className="aboutUs">
					<div className="content-container">
						<img src={casa} alt="Casa Aluroni" className="about-image"/>
						<div className="aboutUs-text" style={{backgroundImage:casa}}>
							<p className="content-text">
							Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
							</p>
							<p className="content-text">
							Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
							</p>
							<p className="content-text">
							Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
							</p>
						</div>
					</div>
					<div className="content-container">
						<img src={massa1} alt="Imagem de massa" className="about-image"/>
						<img src={massa2} alt="Imagem de massa" className="about-image"/>
					</div>
				</div>
			</section>
		</>
	);
};
 
export default About;
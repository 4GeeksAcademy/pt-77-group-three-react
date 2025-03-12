import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Carousel from "./Carousel";

const Home = () => {
	return (
		<div className="mx-auto">
			{/*  navbar */}
			<Navbar title={"Start Bootstrap"} />

			{/*  jumbotron */}
			<div className="d-flex w-75 mx-auto bg-light">
				<Jumbotron/>
			</div>
			{/*  cards */}
			<div className="d-flex w-75 mx-auto">
				<Card title=" The Mc Larren" feet="Click me" body="“I’m not a car guy. The only way I would get a car is if someone left it to me after a movie shoot.”" img="https://woodsidecredit.com/wp-content/uploads/2020/12/McLaren-765-LT30.jpg"/>
				<Card title="The Lambo" feet="Click me" body="Cool cars are the ones that really grab you, there's something special about " img="https://www.ilusso.com/wp-content/uploads/3-3-1024x683.jpg"/>
				<Card title="The Bugatti" feet="Click me" body="“It’s a never-ending battle of making your cars better and also trying to be better yourself like a champs.”" img="https://diytransport.com/exotic-cars-of-2020/Bugatti-Chiron-Super-Sport-300-2048x1024.webp"/>
				<Card title="The Lambo Truck" feet="Click me" body=" “Faster, faster, faster, until the thrill of speed overcomes the fear of death.”" img="https://static.wixstatic.com/media/19dbe6_cf028d02c0c74e9a85cf5f434d414b31~mv2.jpg/v1/crop/x_228,y_0,w_1544,h_959/fill/w_560,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC5238_edited.jpg"/>
			</div>
			{/*  footer */}
			<Footer />
		</div>
	);
};

export default Home;

import React from "react";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

const Home = () => {
	return (
		<div className="mx-auto">
			{/*  navbar */}
			
			{/*  jumbotron */}
			<div className="d-flex w-75 mx-auto bg-light">
				<Jumbotron/>
			</div>
			{/*  cards */}
			
			{/* footer */}
			<Footer />
			
		</div>
	);
};

export default Home;

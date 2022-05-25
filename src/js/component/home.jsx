import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron/>

			<Card
				img="https://picsum.photos/200"
				title="A title"
				text="Some text"
				button="Click me"
			/>
			<Card
				img="https://picsum.photos/200"
				title="Another title"
				text="Some more text"
				button="Click me 2"
			/>
			<Card
				img="https://picsum.photos/200"
				title="Lalalal"
				text="Lorem ipsum"
				button="Im a button"
			/>
			<Card
				img="https://picsum.photos/200"
				title="Card title"
				text="Some textttttttttt"
				button="Now click"
			/>
		</div>
	);
};

export default Home;

import Footer from "./components/containers/Footer/Footer";
import Header from "./components/containers/Header/Header";
import Home from "./components/pages/Home/Home";

import "./index.css";


function App() {
	const user = {
		nom: "Djemai",
		prenom: "Samy",
		age: 30,
		taches: ["tache 1", "tache 2", "tache 3"],
	};
	return (
		<>
			<Header />
			<main>
				<Home user={user} />
			</main>
			<Footer />
		</>
	);
}

export default App;

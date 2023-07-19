import Compteur from "../../containers/Compteur/Compteur";
import ContactForm from "../../containers/ContactForm/ContactForm";
import Hero from "../../containers/Hero/Hero";
import Skills from "../../containers/Skills/Skills";

export default function Home() {
	// Exercice:
	// Créer un composant: /containers/Card/Card.jsx
	// Créer une composant: /containers/Skills/Skills.jsx
	// Déclarer un tableau de skills.

	// Faire un boucle sur le tableau
	// Pour chaque éléments, utiliser la composant Card en envoyant props

	return (
		<div>
      <Compteur />
			<Hero />
      <Skills />
			<ContactForm />
		</div>
	);
}

import classes from "./Hero.module.css";
import Bouton from "../../ui/Bouton/Bouton";
import heroImage from "../../../assets/Image_samy_djemai.svg";
import linkdin from "../../../assets/images/icons/linkedin.svg";
import github from "../../../assets/images/icons/github.svg";
export default function Hero() {
	function disBonjour() {
		alert("bonjour");
	}

	return (
		<div className={classes.container}>
		

			<div className={classes.containerRight}>
				<h2 onClick={disBonjour}>Développeur full-stack</h2>
				<p>
					{
						"Je développe des sites Web et applications mobiles modernes et originales, qui s'adaptent aux besoins de chaque projet : multi-plateforme et responsive, référencement, réseaux sociaux, authentification, paiements en ligne..."
					}
				</p>
				<Bouton action={disBonjour}>Me contacter</Bouton>
			</div>
			<div className={classes.containerLeft}>
				<img className={classes.image} src={heroImage} alt="" />
				<div className={classes.icons}>
					<a href="https://www.linkedin.com/in/samy-djemai-a52910254/">
						<img className={classes.icon} src={linkdin} alt="" />
					</a>
					<a href="https://github.com/Djemai-Samy">
						<img className={classes.icon} src={github} alt="" />
					</a>
				</div>
			</div>
		</div>
	);
}

// Ajouter un input
// Créer une fonction qui affiche le texte reçu en parametre
// lier l'input avec la fonction en utilisant l'evenent onChange

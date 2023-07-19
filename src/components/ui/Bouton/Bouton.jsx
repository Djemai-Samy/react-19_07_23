import classes from "./Bouton.module.css";
function Bouton({ children, couleur, action }) {
	return (
		<button onClick={action} style={{ backgroundColor: couleur }} className={classes.btn}>
			{children}
		</button>
	);
}

export default Bouton;

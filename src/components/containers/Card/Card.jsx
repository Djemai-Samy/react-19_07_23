import classes from "./Card.module.css";

export default function Card({ element }) {
	return (
		<div className={classes.container}>
			<a className={classes.titre} href={element.lien} target="blank">
				<h2>{element.titre}</h2>
			</a>
      <img className={classes.image} src={element.image} alt="" />
			<p className={classes.description}>{element.description}</p>
		</div>
	);
}

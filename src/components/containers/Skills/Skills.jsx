import Card from "../Card/Card";
import FlexDiv from "../FlexDiv/FlexDiv";

export default function Skills() {

  let skills = [
		{
			titre: "ReactJS: introduction",
			description:
				"Une introduction pour découvrir ReactJS, et vous permettra de vous familiariser avec les bases de cette bibliothèque pour construire des applications web plus complexes.",
			image:
				"https://www.djemai-samy.com/blog/2.programmation/1.web/react/react-initiation/react-introduction/react-introduction.png",
			lien: "https://www.djemai-samy.com/posts/1.react-introduction.article",
		},
		{
			titre: "Symfony 6: Introduction",
			description:
				"Vous découvrirez les principes fondamentaux de Symfony, son architecture et la manière de configurer votre environnement de développement.",
			image:
				"https://www.djemai-samy.com/blog/2.programmation/2.server/4.php/3.symfony6/1.symfony6-initiation/1.symfony6-introduction/1.symfony6-introduction.png",
			lien: "https://www.djemai-samy.com/posts/1.symfony6-introduction.article",
		},
		{
			titre: "HTML: Introduction",
			description:
				"Cet article porte sur les fondements du HTML, pour prendre un bon départ. Nous allons définir les éléments, les attributs et tout autre terme important.",
			image:
				"https://www.djemai-samy.com/blog/2.programmation/1.web/1.html/1.html-initiation/1.html-introduction/html-introduction.png",
			lien: "https://www.djemai-samy.com/posts/1.html-introduction.article",
		},
	];
  return (
    <FlexDiv>
      {skills.map((element)=>{
        return <Card key={element.lien} element={element} />
        })}
    </FlexDiv>
  )
}

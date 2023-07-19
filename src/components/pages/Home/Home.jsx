import ContactForm from "../../containers/ContactForm/ContactForm";
import Hero from "../../containers/Hero/Hero";

export default function Home({ user }) {

	return (
		<div>
			<Hero />

			<ContactForm />
      
		</div>
	);
}

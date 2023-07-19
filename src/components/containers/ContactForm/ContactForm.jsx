import Bouton from '../../ui/Bouton/Bouton'
import Input from '../../ui/Input/Input';
import classes from './ContactForm.module.css';
export default function ContactForm() {
  return (
    <div className={classes.form}>
      <h2>Contactez nous</h2>
     
      <Input monType='email' monHolder='Entrez votre email' maValeur='john.doe@gmail.com' />
      <Input monType='text' monHolder='Entrez votre nom complet.' />
      <textarea  rows="10" placeholder='Vote message...'></textarea>

      <Bouton>Envoyer</Bouton>
    </div>
  )
}

import Bouton from '../../ui/Bouton/Bouton'
import Input from '../../ui/Input/Input';
import FlexDiv from '../FlexDiv/FlexDiv';
export default function ContactForm() {
  return (
    <FlexDiv direction='column'>
      <h2>Contactez nous</h2>
     
      <Input monType='email' monHolder='Entrez votre email' maValeur='john.doe@gmail.com' />
      <Input monType='text' monHolder='Entrez votre nom complet.' />
      <textarea style={{width:"100%", margin:"1em 0"}}  rows="10" placeholder='Vote message...'></textarea>

      <Bouton>Envoyer</Bouton>
    </FlexDiv>
  )
}

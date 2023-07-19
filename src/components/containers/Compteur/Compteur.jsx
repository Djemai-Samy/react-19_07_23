import { useState } from "react";

export default function Compteur() {

  let [compteur, setCompteur] = useState(0);

  function add(){
    setCompteur(compteur + 1);
  }
  function sub(){
    setCompteur(compteur - 1)
  }
  return (
    <div>

      <h1>{compteur}</h1>

      <button onClick={sub}>-1</button>
      <button onClick={add}>+1</button>
    </div>
  )
}

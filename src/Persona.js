import { useParams } from "react-router-dom";
import personitas from "./Personas.json"

export default function Persona(){
    const { personaId } = useParams();

    const persona = personitas.find((personitas)=> personaId === personitas.id )

    console.log(personaId)
 return (
   <div>

      {`ID: ${personaId}`}
      <br></br>
      {`nombre: ${persona.nombre}`}
      <br></br>

      {`apellido: ${persona.apellido}`}
      <br></br>

      {`edad: ${persona.edad}`}
      <br></br>

      {`email: ${persona.email}`}
   </div>
 )

}
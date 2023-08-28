import { useParams } from "react-router-dom";
import personitas from "./Personas.json"
import "./Persona.css"

export default function Persona(){
    const { personaId } = useParams();

    const persona = personitas.find((personitas)=> personaId === personitas.id )

    console.log(personaId)
 return (
   <div className="centrar">
      <div class="parent">
        <div class="card">
            <div class="logo">
                <span class="circle circle1"></span>
                <span class="circle circle2"></span>
                <span class="circle circle3"></span>
                <span class="circle circle4"></span>
                <span class="circle circle5">
                    {persona.id}
                </span>

            </div>
            <div class="glass"></div>
            <div class="content">
                <span class="title">{persona.nombre} {persona.apellido}</span>
                <span class="text">Edad: {persona.edad} </span>
                <span class="text">Email: {persona.email}</span>
            </div>
        </div>
    </div>
   </div>
 )

}
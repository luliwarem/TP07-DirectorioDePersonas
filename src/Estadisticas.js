import personitas from "./Personas.json";
import { useState } from "react";

export default function Estadisticas() {

    const[mayorEdad, setMayorEdad] = useState();
    const[mayores35, setMayores35] = useState();
    const[personaMayorEdad, setPersonaMayorEdad] = useState();
    const[menorEdad, setMenorEdad] = useState();
    const[personaMenorEdad, setPersonaMenorEdad] = useState();


    return (
        < div >{
        personitas.map(p => {

            if (p.edad > 35) {
                setMayores35(mayores35+1)
            }

            if (p.edad > personaMayorEdad) {
                setPersonaMayorEdad(p.edad)

            }

            if (p.edad < personaMenorEdad) {
                setPersonaMenorEdad(p.edad) 
            }

        
        
        })
        
    }

    {personitas.map(p => {
        if (p.edad = personaMayorEdad) {
            setMayorEdad.push(p.nombre)
        }
        if (p.edad = personaMenorEdad) {
            setMenorEdad.push(p.nombre)
        }
    })}

    { `mayores de 35: ${mayores35}` }
    <br></br>
    {
        `las personas de mayor edad son: ${mayorEdad.map((personita) =>
            personita.nombre)}}`
    }
    <br></br>
    {
        `las personas de menor edad son: ${menorEdad.map((personita) =>
            personita.nombre)}}`
    }
    <br></br>
        </div >
            )

}
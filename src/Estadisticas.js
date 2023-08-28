import personitas from "./Personas.json";
import { useState } from "react";

export default function Estadisticas() {

    const [mayorEdad, setMayorEdad] = useState(0);
    const [mayores35, setMayores35] = useState(0);
    const [personaMayorEdad, setPersonaMayorEdad] = useState([]);
    const [menorEdad, setMenorEdad] = useState(99999);
    const [personaMenorEdad, setPersonaMenorEdad] = useState([]);

    personitas.map((p) => {

        if (p.edad > 35) {
            setMayores35(mayores35 + 1)
        }

        if (p.edad > mayorEdad) {
            setMayorEdad(p.edad)

        }

        if (p.edad < menorEdad) {
            setMenorEdad(p.edad)
        }

        {
            personitas.map((p) => {
                if (p.edad = mayorEdad) {
                    setPersonaMayorEdad(personaMayorEdad => [...personaMayorEdad, p.nombre]);
                }
                if (p.edad = menorEdad) {
                    setPersonaMenorEdad(personaMenorEdad => [...personaMenorEdad, p.nombre]);
                }
            })
        }

    })


    return (
        <>
        <div><p>
            mayores de 35: {mayores35}
            <br></br>

            las personas de mayor edad son: {personaMayorEdad}

            <br></br>

            las personas de menor edad son: {personaMenorEdad}

        </p>
        </div >
        </>
    )

}
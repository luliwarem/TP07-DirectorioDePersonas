import personitas from "./Personas.json";

const Estadisticas = () => {
    
    const result = personitas.filter((p) => parseInt(p.edad) > 35);

    const mayorEdad = personitas.reduce((max , p) => Math.max( max, parseInt(p.edad)), -Infinity)
    const menorEdad = personitas.reduce((min , p) => Math.min( min, parseInt(p.edad)), Infinity)
    console.log(mayorEdad, " ",menorEdad)
    const personasMayorEdad = personitas.filter((p) => parseInt(p.edad) === mayorEdad)
    const personasMenorEdad = personitas.filter((p) => parseInt(p.edad) === menorEdad)


    return (
            <div><p>
                mayores de 35: {result.length}
                <br></br>

                las personas de mayor edad son: {personasMayorEdad}

                <br></br>

                las personas de menor edad son: {personasMenorEdad}

            </p>
            </div >
    )

}

export default Estadisticas;
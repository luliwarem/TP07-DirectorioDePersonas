
import {useContext} from "react"
import { MyContext } from "./MyContext";
import "./Estadisticas.css"

const Estadisticas = () => {
    const {personitas, setPersonitas}=useContext(MyContext);

    const result = personitas.filter((p) => parseInt(p.edad) > 35);

    const mayorEdad = personitas.reduce((prev, current) => {
        return parseInt(current.edad) > parseInt(prev.edad) ? current : prev
    })

    const menorEdad = personitas.reduce((prev, current) => {
        return parseInt(current.edad) < parseInt(prev.edad) ? current : prev
    })

    const result2 = personitas.filter((p) => parseInt(mayorEdad.edad) === parseInt(p.edad))
    const result3 = personitas.filter((p) => parseInt(menorEdad.edad) === parseInt(p.edad))

    console.log(result3)
    return (
        <div className="centrar">
        <div class="parent">
          <div class="card">
              <div class="logo">
                  <span class="circle circle1"></span>
                  <span class="circle circle2"></span>
                  <span class="circle circle3"></span>
                  <span class="circle circle4"></span>
                  <span class="circle circle5"></span>
              </div>
              <div class="glass"></div>
              <div class="content">
                  <span class="title">Hay {result.length} personas mayores de 35</span>
                  <span class="text">Las personas de mayor edad son: {result2.map((p) => p.nombre)} </span>
                  <span class="text">Las personas de menor edad son: {result3.map((p) => p.nombre)}</span>
              </div>
          </div>
      </div>
     </div>
    )

}

export default Estadisticas;
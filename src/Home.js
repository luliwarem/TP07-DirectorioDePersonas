import { Link } from "react-router-dom"
import "./Home.css"
import personitas from "./Personas.json"


export default function Home() {


    return (
        <div class="container">
            <div className="row">
                {
                    personitas.map((personita) =>
                            <Link to={`/persona/${personita.id}`}>
                                <button class="button">
                                    {personita.nombre}
                                </button>
                            </Link>
                    )
                }
                <button class="button special-button">
                    <Link to="/estadisticas">
                    Estadisticas
                    </Link>
                </button>
                <button class="button special-button">
                    <Link to="/contacto">
                    Contacto
                    </Link>
                </button>
                </div>
        </div>
    )

}
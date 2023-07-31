import { Link } from "react-router-dom"
import "./Home.css"
import personitas from "./Personas.json"


export default function Home() {


    return (
        <div class="contenedor">
            <div className="row">
                {
                    personitas.map((personita) =>
                        <div className="col-md-3 mb-3">
                            <Link to={`/persona/${personita.id}`}>
                                <button class="button">
                                    {personita.nombre}
                                </button>
                            </Link>
                        </div>
                    )
                }
                <button class="button special-button">Estadisticas
                    <Link to="/estadisticas">
                    </Link>
                </button>
                <button class="button special-button">Contacto
                    <Link to="/contacto">
                    </Link>
                </button>
            </div>

        </div>
    )

}
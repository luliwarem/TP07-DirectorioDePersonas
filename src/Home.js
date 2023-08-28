import { Link } from "react-router-dom"
import "./Home.css"
import personitas from "./Personas.json"


export default function Home() {


    return (
        <div className="container">
            <div className="row">
                {
                    personitas.map((personita) =>
                        <Link to={`/persona/${personita.id}`} key={personita.id}>
                            <button className="button" >
                                {personita.nombre}
                            </button>
                        </Link>
                    )
                }
            </div>
        </div>
    )

}
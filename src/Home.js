import { Link } from "react-router-dom"
import "./Home.css"
import {useContext} from "react"
import { MyContext } from "./MyContext";
import Personitas from "./Personas.json"

export default function Home() {
    const {personitas,setPersonitas}=useContext(MyContext);
    setPersonitas(Personitas)

    return (
        <div className="container">
            <div className="row">
                {
                    personitas.map((p) =>
                        <Link to={`/persona/${p.id}`} key={p.id}>
                            <button className="button" >
                                {p.nombre}
                            </button>
                        </Link>
                    )
                }
            </div>
        </div>
    )

}
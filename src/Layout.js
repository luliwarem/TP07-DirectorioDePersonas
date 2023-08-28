import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/estadisticas">Estadisticas</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />

        </>

    );

};
export default Layout
import { Link } from "react-router-dom";
import ListSpend from "../../components/ListSpend/ListSpend";
import "./style.css"
/** @type {NextPage} */
const MySpends = () => {
    return (
        <div>
            <h1>Mis Gastos</h1>
            <Link to="/dashboard/registrar_gasto" className="link__gradiant" href="">Registrar Gasto</Link>
            <div className="containerSpends">
                <ListSpend />
            </div>
        </div>
    )
}

export default MySpends;

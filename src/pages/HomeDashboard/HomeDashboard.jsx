import { useContext, useEffect, useState } from "react";
import "./style.css";
import { AuthContext } from "../../context/AuthContext";
import { DoughnutChart } from "../../components/Doughnut";
import { getSpendLastUser } from "../../services/api/spend.service";
import { formatCurrency } from "../../util/formatCurrency";
import LineChart from "../../components/LineChart/LineChart";
import ImageTodo from "../../assets/todo.png"
import { Link } from "react-router-dom";
import StadisticSpenForCategory from "../../components/StadisticSpenForCategory/StadisticSpenForCategory";
const HomeDashboard = () => {
    const { user } = useContext(AuthContext);
    const [lastSpend, setLastSpend] = useState({});
    useEffect(() => {
        const getData = async () => {
            const responseData = await getSpendLastUser();
            setLastSpend(responseData);
        }
        getData();
    }, [])

    return (
        <>
            <div className="banner">
                <img src={ImageTodo} alt="" />
                <div className="">
                    <h3>Hola, {user?.name} {user?.lastname}</h3>
                    <p>Es momento de tomar control de tus finanzas. Revisa tus últimos movimientos, organiza tu presupuesto y sigue avanzando hacia tus metas financieras. <b>¡Tu éxito está en tus manos!</b> </p>
                </div>
            </div>
            <div className="overview">
                <div className="card card__sprendLast">
                    <div className="icon__currency"></div>
                    <h3>Último Gasto</h3>
                    {lastSpend ? (<div className="">
                        <p className="date">Fecha: {new Date(lastSpend?.date).toLocaleString()}</p>
                        <p className="amount">{formatCurrency(lastSpend?.amount)}</p>
                        <Link to="/dashboard/mis_gastos" >Ver detalle</Link>
                    </div>) : (<div>
                        <h1>Aún no has registrado ningún gasto</h1>
                        <Link to="/dashboard/registrar_gasto" className="link__important" >Empezar</Link>
                    </div>)}

                </div>
                <div className="card card__sprendCategory">
                    <h3>Clasificación Categoría</h3>
                    <StadisticSpenForCategory />
                    <DoughnutChart title="Gastos Por Categoria" />
                </div>
                <div className="card card__activity">
                    <h3>Actividad</h3>
                    <LineChart />
                </div>
            </div>
        </>
    );
}

export default HomeDashboard;

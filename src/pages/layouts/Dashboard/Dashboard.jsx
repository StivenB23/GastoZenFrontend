import { Outlet } from "react-router-dom";
import "./style.css";
import SideBar from "../../../components/SideBar/SideBar";
/** @type {NextPage} */
const LayoutDashboard = () => {
    return (
        <div className="container__layout">
            <SideBar />
            <div className="layout">
                <Outlet />
            </div>
        </div>
    )
}

export default LayoutDashboard;

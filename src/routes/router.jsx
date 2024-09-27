import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import LayoutDashboard from "../pages/layouts/Dashboard/Dashboard";
import HomeDashboard from "../pages/HomeDashboard/HomeDashboard";
import MySpends from "../pages/MySpends/MySpends";
import FormExpenditure from "../components/FormExpenditure/FormExpenditure";
import Modal from "../components/Modal/Modal";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },

    {
        path: "dashboard",
        element: <LayoutDashboard />,
        children: [{
            path: "me",
            element: <HomeDashboard />
        },
        {
            path: "mis_gastos",
            element: <MySpends />
        },
        {
            path: "registrar_gasto",
            element: <FormExpenditure />
        }
        ]
    }
])

export default router;
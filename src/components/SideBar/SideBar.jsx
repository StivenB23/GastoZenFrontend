
import { Link } from 'react-router-dom';
import './SideBar.css';
import ImageLogo from "../../assets/Logo.svg"
import IconDoorOpen from '../../assets/icons/icon-door-open-solid.jsx';
import IconHouse from '../../assets/icons/house-solid.jsx';
import IconHandDollar from '../../assets/icons/iconHandDollar.jsx';
import TargetUser from '../TargetUser/TargetUser.jsx';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import IconGearSolid from '../../assets/icons/icon-gear-solid.jsx';
const SideBar = () => {
	const { logout } = useContext(AuthContext);
	const logoutApplication = () => {
		logout();
	}
	return (
		<div className='sidebar'>
			<figure className="logo">
				<img src={ImageLogo} alt="" />
			</figure>
			<TargetUser />
			<div className="sidebar__links">
				<Link to="/dashboard/me"><IconHouse /> Dashboard</Link>
				<Link to="/dashboard/mis_gastos"><IconHandDollar />	Mis Gastos</Link>
				<Link to="/dashboard/forms"><IconGearSolid /> Configuración</Link>
				<Link to="/" onClick={logoutApplication}><IconDoorOpen /> Salir</Link>
			</div>
		</div>
	);
};

SideBar.propTypes = {};

export default SideBar;
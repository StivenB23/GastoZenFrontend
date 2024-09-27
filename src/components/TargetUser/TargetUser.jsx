import { useContext } from 'react';
import './TargetUser.css';
import { AuthContext } from '../../context/AuthContext';

const TargetUser = ({ }) => {
	const { user } = useContext(AuthContext);
	return (

		<div className='targetuser'>
			<img src={`https://ui-avatars.com/api/?name=${user?.name} ${user?.lastname}&background=f32c2c&color=ffffff`} alt="" />
			<div className="targetuser__detail">
				<p>{user?.name + " " + user?.lastname}</p>
				<small>{user?.email}</small>
			</div>
		</div>
	);
};

TargetUser.propTypes = {};

export default TargetUser;
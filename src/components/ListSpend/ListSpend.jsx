import { useEffect, useState } from 'react';
import './ListSpend.css';
import { getSpendsUser } from '../../services/api/spend.service';
import CardSpend from '../CardSpend/CardSpend';

const ListSpend = () => {
	const [spends, setSpends] = useState([])
	useEffect(() => {
		const getData = async () => {
			let data = await getSpendsUser()
			setSpends(data)
		}
		getData();
	}, [])

	return (
		<>

			{spends.length > 0 ? (<div className='listspend'>
				{spends.map(spend => (
					<CardSpend spend={spend} key={spend} />
				))}
			</div>) : (<h2>No hay registros de gastos. ¿Qué estas esperando?</h2>)}

		</>
	);
};

ListSpend.propTypes = {};

export default ListSpend;
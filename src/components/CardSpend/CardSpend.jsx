import { formatCurrency } from '../../util/formatCurrency';
import { reduceText } from '../../util/pipeText';
import './CardSpend.css';

const CardSpend = ({ spend }) => {
	const { date, amount, detail, category } = spend;
	return (
		<div className='cardspend'>
			<p className='date'>Fecha: {new Date(date).toLocaleString()}</p>
			<p className='amount'>{formatCurrency(amount)}</p>
			<small className='category'>{category.name}</small>
			<p className='description'>{reduceText(detail, 80)}</p>
		</div>
	);
};

CardSpend.propTypes = {};

export default CardSpend;
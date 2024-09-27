import { useEffect, useState } from 'react';
import './FormExpenditure.css';
import { getCategories } from '../../services/api/category.service';
import { createSpend } from '../../services/api/spend.service';
import { useForm } from 'react-hook-form';
import Modal from '../Modal/Modal';

const FormExpenditure = () => {
	const [categories, setCategories] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false); // Control del modal
	const [modalMessage, setModalMessage] = useState(''); // Mensaje del modal
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		const getData = async () => {
			let categoriesData = await getCategories();
			setCategories(categoriesData);
		};
		getData();
	}, []);

	const registerSprend = async (data) => {
		// Ajustar la fecha con hora actual

		let objectDate = new Date(data.date); // Obtener la fecha de data.date

		// Obtener la fecha y hora actuales
		const currentDate = new Date();

		// Crear un nuevo objeto Date que mantenga la fecha original y combine la hora actual
		objectDate = new Date(
			Date.UTC(
				objectDate.getUTCFullYear(),
				objectDate.getUTCMonth(),
				objectDate.getUTCDate(),
				currentDate.getHours(),
				currentDate.getMinutes(),
				currentDate.getSeconds()
			)
		);

		// Asignar el nuevo objeto Date a data.date
		data.date = objectDate;

		// Llamada al servicio para crear el gasto
		const responseRequest = await createSpend(data);

		// Mostrar modal en caso de éxito
		if (responseRequest?.error !== true) {
			setModalMessage('Tu nuevo gasto ha sido agregado 💸. ¡Gracias por mantener tus finanzas bajo control! 📊');
			setIsModalOpen(true); // Abre el modal
			reset();
		}
	};

	// Función para cerrar el modal
	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			{/* Modal */}
			{isModalOpen && (
				<Modal onClose={closeModal}>
					<h1>🎉 ¡Gasto Registrado Exitosamente! 🎉</h1>
					<p>Tu nuevo gasto ha sido agregado 💸. <b>¡Gracias por mantener tus finanzas bajo control!</b>📊
						<br /><br />
						Recuerda que cada paso cuenta hacia una mejor gestión de tus finanzas personales 💼. No importa si es grande o pequeño, lo importante es llevar un registro preciso 📝..</p>
				</Modal>
			)}

			{/* Formulario */}
			<form className='form__sprend' onSubmit={handleSubmit(registerSprend)}>
				<h2>Registrar Gasto</h2>
				<label htmlFor="amount">Monto: <b className='text__warning--error'>*</b> </label>
				<input type="number" {...register("amount", { required: "El monto del gasto no puede estar vacío" })} />
				{errors.amount && <p className='text__warning--error'>{errors.amount.message}</p>}

				<label htmlFor="category">Categoría:</label>
				<select {...register("category", { required: "Debes elegir una categoría para clasificar el gasto" })}>
					<option value="">Seleccionar</option>
					{categories.map(category => (<option key={category._id} value={category._id}>{category.name}</option>))}
				</select>
				{errors.category && <p className='text__warning--error'>{errors.category.message}</p>}

				<label htmlFor="detail">Detalle del gasto</label>
				<textarea {...register("detail")}></textarea>

				<label htmlFor="date">Fecha :</label>
				<input type="date" {...register("date", { required: "Debes seleccionar una fecha" })} />
				{errors.date && <p className='text__warning--error'>{errors.date.message}</p>}

				<button className='button__primary'>Agregar Gasto</button>
			</form>
		</>
	);
};

export default FormExpenditure;

import './LineChart.css';
import { useState, useEffect, useRef } from 'react';
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend
} from 'chart.js';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { getActivitiesUser } from '../../services/api/spend.service';
ChartJS.register(ArcElement, Tooltip, Legend);
const LineChart = () => {
	const [data, setData] = useState([])
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    });
    useEffect(() => {
        const getChartData = async () => {
            const dataRequest = await getActivitiesUser()
            setData(dataRequest)
            setIsLoading(false)
        }
        getChartData()
    }, [])
	useEffect(() => {
        if (data.length > 0 && chartRef.current) {
            const labels = data.map(item => item._id);
            const values = data.map(item => item.cantidadGastos);
            const chart = chartRef.current;

            const updatedChartData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Gastos',
                        data: values,
                        backgroundColor:'rgba(127, 235, 110 )',
                        borderColor: ['rgba(35, 178, 12)'],
                        borderWidth: 2,
						tension: 0.4,
                        fill: true,

                    },
                ],
            };

            setChartData(updatedChartData);
        }
    }, [data]);

	const [isLoading, setIsLoading] = useState(true)
	return (
		<div className='linechart'>
			{isLoading ? <p>Cargando...</p> :<Line options={{responsive: true}} ref={chartRef} id="canvas-id" data={chartData} />}
		</div>
	);
};

LineChart.propTypes = {};

export default LineChart;
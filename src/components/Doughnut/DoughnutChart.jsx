import { Doughnut } from 'react-chartjs-2';
import { useState, useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    ArcElement, 
    Tooltip, 
    Legend
} from 'chart.js';
import 'chart.js/auto';
import "./DoughnutChart.css"
import { getSprendForCategories } from '../../services/api/spend.service';
// Register the necessary elements for the Doughnut chart
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ title }) => {
    const [data, setData] = useState([])
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    });
    useEffect(() => {
        const getChartData = async () => {
            const dataRequest = await getSprendForCategories()
            setData(dataRequest)
            setIsLoading(false)
        }
        getChartData()
    }, [])
    useEffect(() => {
        if (data.length > 0 && chartRef.current) {
            const labels = data.map(item => item._id);
            const values = data.map(item => item.gastosPorCategoria);
            const chart = chartRef.current;

            const updatedChartData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Gastos',
                        data: values,
                        backgroundColor: [
                            'rgba(131, 227, 102)',  // Verde agua
                            'rgba(2, 177, 221)',  // Azul
                            'rgba(247, 108, 95)',  // Rojo
                            'rgba(225, 221, 72)',  // Yellow
                            'rgba(234, 163, 104)',  // orange
                        ],
                        borderColor: ['rgba(131, 227, 102)', 'rgba(60, 212, 234)', 'rgba(247, 108, 95)', 'rgba(225, 221, 72)', 'rgba(234, 163, 104)'],
                        borderWidth: 1,
                    },
                ],
            };

            setChartData(updatedChartData);
        }
    }, [data]);
    const [isLoading, setIsLoading] = useState(true)
    return (
        <div className='doughnutChart'>
            {isLoading ? <p>Cargando...</p> : <Doughnut options={{responsive: true}} ref={chartRef} id="canvas-id" data={chartData} />}
        </div>

    );
};

DoughnutChart.propTypes = {};

export default DoughnutChart;

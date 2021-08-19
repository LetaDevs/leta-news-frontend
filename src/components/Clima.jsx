import React, {useEffect, useState} from 'react';
import useInterval from '../hooks/useInterval';
import './css/navbar.css';

const Clima = () => {
	const [temp, setTemp] = useState(0);
	const [icon, setIcon] = useState('');
	const [usuario, setUsuario] = useState({
		ciudad: '',
		pais: '',
	});

	const {ciudad, pais} = usuario;

	useEffect(() => {
		const obtenerDatos = async () => {
			const url = 'https://ipapi.co/json/';
			const consultar = await fetch(url);
			const datos = await consultar.json();
			setUsuario({
				ciudad: datos.city,
				pais: datos.country,
			});
		};
		obtenerDatos();
	}, []);

	const consultarClima = async () => {
		const apiKey = 'a639a96014567a131771d9ee0f2ec1a3';
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&units=metric&lang=es&appid=${apiKey}`;

		const consultar = await fetch(url);
		const datos = await consultar.json();
		if (datos.cod === 200) {
			setTemp(datos.main.temp);
			setIcon(datos.weather[0].icon);
		}
	};

	useEffect(() => {
		if (!Object.values(usuario).every((dato) => dato.trim !== '')) return;

		consultarClima();
	}, [usuario]);

	useInterval(consultarClima, 30000);

	return (
		<div className='clima'>
			<span className='clima-ciudad'>{ciudad}</span>
			<span className='clima-temperatura'>{temp.toFixed(1)}°C</span>
			<div className='clima-img'>
				<img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt='icon clima' />
			</div>
		</div>
	);
};

export default Clima;

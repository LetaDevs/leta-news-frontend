import React, {useState, useEffect} from 'react';
import {actualizarEstadoCripto} from '../helpers/actualizarEstadoCripto';
import useInterval from '../hooks/useInterval';
import './css/navbar.css';

const Criptomonedas = () => {
	const [estadoBtc, setEstadoBtc] = useState('igual');
	const [estadoEth, setEstadoEth] = useState('igual');
	const [estadoLtc, setEstadoLtc] = useState('igual');
	const [precios, setPrecios] = useState({
		btc: 0,
		eth: 0,
		ltc: 0,
	});

	const consultarPrecios = async () => {
		const apiKey = 'bcc4f719496295fbd8b4429fc811191a480af0c83b518208b46100859456b5a5';
		const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD&api_key=${apiKey}`;

		const consultar = await fetch(url);
		const datos = await consultar.json();

		setEstadoBtc(actualizarEstadoCripto(datos.BTC.USD, precios.btc));
		setEstadoEth(actualizarEstadoCripto(datos.ETH.USD, precios.eth));
		setEstadoLtc(actualizarEstadoCripto(datos.LTC.USD, precios.ltc));

		setPrecios({
			btc: datos.BTC.USD,
			eth: datos.ETH.USD,
			ltc: datos.LTC.USD,
		});
	};

	useEffect(() => {
		consultarPrecios();
	}, []);

	useInterval(consultarPrecios, 5000);

	return (
		<div className='criptos'>
			<div className='cripto '>
				<div className='cripto-icon btc'></div>
				<div className='cripto-precio'>
					<span>BTC-USD</span>
					<span className={`cripto-precio-precio ${estadoBtc}`}>${precios.btc}</span>
				</div>
			</div>
			<div className='cripto '>
				<div className='cripto-icon eth'></div>
				<div className='cripto-precio'>
					<span>ETH-USD</span>
					<span className={`cripto-precio-precio ${estadoEth}`}>${precios.eth}</span>
				</div>
			</div>
			<div className='cripto '>
				<div className='cripto-icon ltc'></div>
				<div className='cripto-precio'>
					<span>LTC-USD</span>
					<span className={`cripto-precio-precio ${estadoLtc}`}>${precios.ltc}</span>
				</div>
			</div>
		</div>
	);
};

export default Criptomonedas;

import React from 'react';
import './css/navbar.css';

const Criptomonedas = () => {
	return (
		<div className='criptos'>
			<div className='cripto '>
				<div className='cripto-icon btc'></div>
				<div className='cripto-precio'>
					<span>BTC-USD</span>
					<span className='cripto-precio-precio'>$00</span>
				</div>
			</div>
			<div className='cripto '>
				<div className='cripto-icon eth'></div>
				<div className='cripto-precio'>
					<span>ETH-USD</span>
					<span className='cripto-precio-precio'>$00</span>
				</div>
			</div>
			<div className='cripto '>
				<div className='cripto-icon ltc'></div>
				<div className='cripto-precio'>
					<span>LTC-USD</span>
					<span className='cripto-precio-precio'>$00</span>
				</div>
			</div>
		</div>
	);
};

export default Criptomonedas;

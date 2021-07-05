import React from 'react';
import './css/navbar.css';

const Clima = () => {
	return (
		<div className='clima'>
			<span className='clima-ciudad'>Bogota</span>
			<span className='clima-temperatura'>28°C</span>
			<div className='clima-img'></div>
		</div>
	);
};

export default Clima;

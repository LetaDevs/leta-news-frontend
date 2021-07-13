import React from 'react';
import '../css/extras.css';

const Alerta = ({categoria, mensaje}) => {
	return (
		<>
			<div className={`alerta ${categoria}`}>
				<p className='alerta-mensaje'>{mensaje}</p>
			</div>
		</>
	);
};

export default Alerta;

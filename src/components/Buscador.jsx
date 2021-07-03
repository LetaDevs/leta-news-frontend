import React from 'react';
import './css/sidebar.css';

const Buscador = () => {
	return (
		<div className='buscardor'>
			<div className='input'>
				<form>
					<div className='input-buscar'>
						<input type='text' placeholder='buscar...' />
						<button type='submit'>
							<div className='buscar-icon'></div>
						</button>
					</div>
				</form>
			</div>
			<div className='paises'>
				<button className='boton-pais'>CO</button>
				<button className='boton-pais'>MX</button>
				<button className='boton-pais'>AR</button>
				<button className='boton-pais'>US</button>
				<button className='boton-pais'>CA</button>
			</div>
		</div>
	);
};

export default Buscador;

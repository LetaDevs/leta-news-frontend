import React, {useState} from 'react';
import {useContext} from 'react';
import {NoticiasContext} from '../contexts/NoticiasContext';
import './css/sidebar.css';

const Buscador = () => {
	const [busqueda, updateBusqueda] = useState({
		busqueda: '',
	});
	const {pais, setPais, setBusqueda} = useContext(NoticiasContext);

	const cambiarPais = (valor) => {
		setPais(valor);
	};

	const handleChange = (e) => {
		updateBusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setBusqueda(busqueda.busqueda);
		updateBusqueda({
			busqueda: '',
		});
	};

	return (
		<div className='buscardor'>
			<div className='input'>
				<form onSubmit={handleSubmit}>
					<div className='input-buscar'>
						<input
							type='text'
							placeholder='buscar...'
							name='busqueda'
							value={busqueda.busqueda}
							onChange={handleChange}
						/>
						<button type='submit'>
							<div className='buscar-icon'></div>
						</button>
					</div>
				</form>
			</div>
			<div className='paises'>
				<button className={`boton-pais ${pais === 'co' && 'pais-active'}`} onClick={() => cambiarPais('co')}>
					CO
				</button>
				<button className={`boton-pais ${pais === 'mx' && 'pais-active'}`} onClick={() => cambiarPais('mx')}>
					MX
				</button>
				<button className={`boton-pais ${pais === 'ar' && 'pais-active'}`} onClick={() => cambiarPais('ar')}>
					AR
				</button>
				<button className={`boton-pais ${pais === 'us' && 'pais-active'}`} onClick={() => cambiarPais('us')}>
					US
				</button>
				<button className={`boton-pais ${pais === 'ca' && 'pais-active'}`} onClick={() => cambiarPais('ca')}>
					CA
				</button>
			</div>
		</div>
	);
};

export default Buscador;

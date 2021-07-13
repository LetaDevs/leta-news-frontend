import React, {useContext} from 'react';
import './css/sidebar.css';

import {AuthContext} from '../contexts/AuthContext';
import Buscador from './Buscador';
import Menu from './Menu';

const Sidebar = () => {
	const {usuario} = useContext(AuthContext);

	if (Object.keys(usuario).length === 0) return <p>...</p>;

	return (
		<div className='sidebar'>
			<div>
				<div className='perfil'>
					<span>{usuario.nombre.charAt(0).toUpperCase()}</span>
				</div>
				<p className='saludo-usuario'>Hola, {usuario.nombre}</p>
			</div>
			<Buscador />
			<Menu />
			<div className='logo'>
				<h1>
					LETA News <span>2021</span>
				</h1>
			</div>
		</div>
	);
};

export default Sidebar;

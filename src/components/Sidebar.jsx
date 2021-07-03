import React from 'react';
import './css/sidebar.css';

import Buscador from './Buscador';
import Menu from './Menu';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div>
				<div className='perfil'>
					<span>E</span>
				</div>
				<p className='saludo-usuario'>Hola, Eduardo</p>
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

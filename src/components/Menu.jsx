import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import './css/sidebar.css';

import {AuthContext} from '../contexts/AuthContext';

const Menu = () => {
	const {setUsuario} = useContext(AuthContext);

	const cerrarSesion = () => {
		setUsuario({});
		localStorage.removeItem('token');
	};

	return (
		<div className='menu'>
			<nav>
				<NavLink to='/general' exact activeClassName='nav-link-active' className='nav-link'>
					<div className='nav-link-icon nav-link-general'></div> General
				</NavLink>
				<NavLink to='/sports' exact activeClassName='nav-link-active' className='nav-link'>
					<div className='nav-link-icon nav-link-deportes'></div> Deportes
				</NavLink>
				<NavLink to='/business' exact activeClassName='nav-link-active' className='nav-link'>
					<div className='nav-link-icon nav-link-economia'></div> Negocios
				</NavLink>
				<NavLink to='/health' exact activeClassName='nav-link-active' className='nav-link'>
					<div className='nav-link-icon nav-link-salud'></div> Salud
				</NavLink>
				<NavLink to='/entertainment' exact activeClassName='nav-link-active' className='nav-link'>
					<div className='nav-link-icon nav-link-entretenimiento'></div> Entretenimiento
				</NavLink>
				<NavLink to='/technology' exact activeClassName='nav-link-active' className='nav-link'>
					<div className='nav-link-icon nav-link-technology'></div> Tecnología
				</NavLink>
				<NavLink to='/science' exact activeClassName='nav-link-active' className='nav-link'>
					<div className='nav-link-icon nav-link-science'></div> Ciencia
				</NavLink>
				<NavLink to='/noticias/despues' exact activeClassName='nav-link-active' className='nav-link'>
					<div className='nav-link-icon nav-link-mas-tarde'></div> Leer despues
				</NavLink>
				<NavLink
					to='/iniciar-sesion'
					exact
					activeClassName='nav-link-active'
					className='nav-link'
					onClick={cerrarSesion}>
					<div className='nav-link-icon nav-link-cerrar-sesion'></div> Cerrar sesión
				</NavLink>
			</nav>
		</div>
	);
};

export default Menu;

import React from 'react';
import {NavLink} from 'react-router-dom';
import './css/sidebar.css';

const Menu = () => {
	return (
		<div className='menu'>
			<nav>
				<NavLink to='/general' exact activeClassName='nav-link-active' className='nav-link '>
					<div className='nav-link-icon nav-link-general'></div> General
				</NavLink>
				<NavLink to='/deportes' exact activeClassName='nav-link-active' className='nav-link'>
					<div className='nav-link-icon nav-link-deportes'></div> Deportes
				</NavLink>
				<NavLink to='/economia' exact activeClassName='nav-link-active' className='nav-link'>
					<div className='nav-link-icon nav-link-economia'></div> Economía
				</NavLink>
				<NavLink to='/salud' exact activeClassName='nav-link-active' className='nav-link'>
					<div className='nav-link-icon nav-link-salud'></div> Salud
				</NavLink>
				<NavLink to='/entretenimiento' exact activeClassName='nav-link-active' className='nav-link'>
					<div className='nav-link-icon nav-link-entretenimiento'></div> Entretenimiento
				</NavLink>
				<NavLink to='/tecnologia' exact activeClassName='nav-link-active' className='nav-link'>
					<div className='nav-link-icon nav-link-tecnologia'></div> Tecnología
				</NavLink>
				<NavLink to='/despues' exact activeClassName='nav-link-active' className='nav-link'>
					<div className='nav-link-icon nav-link-mas-tarde'></div> Leer más tarde
				</NavLink>
				<NavLink to='/cerrar-sesion' exact activeClassName='nav-link-active' className='nav-link'>
					<div className='nav-link-icon nav-link-cerrar-sesion'></div> Cerrar sesión
				</NavLink>
			</nav>
		</div>
	);
};

export default Menu;

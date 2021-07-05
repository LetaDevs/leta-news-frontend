import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import './css/navbar.css';

import Criptomonedas from './Criptomonedas';
import Clima from './Clima';

const Navbar = ({handleDrawerToggle, classes}) => {
	return (
		<AppBar position='fixed' className={classes.appBar} elevation='disabled'>
			<Toolbar variant='dense'>
				<IconButton aria-label='open drawer' edge='start' onClick={handleDrawerToggle} className={classes.menuButton}>
					<MenuIcon />
				</IconButton>
				<div className='navbar-contenedor'>
					<Criptomonedas />
					<Hidden only='xs'>
						<Clima />
					</Hidden>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;

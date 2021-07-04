import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import './css/navbar.css';

const Navbar = ({handleDrawerToggle, classes}) => {
	return (
		<AppBar position='fixed' className={classes.appBar} elevation='disabled'>
			<Toolbar variant='dense'>
				<IconButton aria-label='open drawer' edge='start' onClick={handleDrawerToggle} className={classes.menuButton}>
					<MenuIcon />
				</IconButton>
				<div className='navbar-contenedor'>
					<div className='criptos'>
						<div className='cripto '>
							<div className='cripto-icon btc'></div>
							<div className='cripto-precio'>
								<span>BTC-USD</span>
								<span className='cripto-precio-precio'>$32,234.00</span>
							</div>
						</div>
						<div className='cripto '>
							<div className='cripto-icon eth'></div>
							<div className='cripto-precio'>
								<span>ETH-USD</span>
								<span className='cripto-precio-precio'>$32,234.00</span>
							</div>
						</div>
						<div className='cripto '>
							<div className='cripto-icon ltc'></div>
							<div className='cripto-precio'>
								<span>LTC-USD</span>
								<span className='cripto-precio-precio'>$32,234.00</span>
							</div>
						</div>
					</div>
					<Hidden only='xs'>
						<div className='clima'>
							<span className='clima-ciudad'>Bogota</span>
							<span className='clima-temperatura'>28°C</span>
							<div className='clima-img'></div>
						</div>
					</Hidden>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;

import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import '../css/extras.css';
import 'animate.css';

const Formulario = ({crearCuenta}) => {
	return (
		<div className='contenedor-form '>
			<div className='formulario-contenedor animate__animated animate__fadeIn'>
				<h2 className='titulo'>{crearCuenta ? 'CREAR CUENTA' : 'INICIAR SESIÓN'}</h2>
				<form>
					{crearCuenta && (
						<div className='campo'>
							<label htmlFor='nombre'>Nombre:</label>
							<input type='text' placeholder='Ingresa tu nombre' />
						</div>
					)}
					<div className='campo'>
						<label htmlFor='email'>Email:</label>
						<input type='text' placeholder='Ingresa tu email' />
					</div>
					<div className='campo'>
						<label htmlFor='password'>Password:</label>
						<input type='text' placeholder='Ingresa tu password' />
					</div>
					<div className='campo boton'>
						<button type='submit'>{crearCuenta ? 'CREAR CUENTA' : 'INICIAR SESIÓN'}</button>
						{crearCuenta ? (
							<p>
								Ya tienes cuenta?{' '}
								<Link to='/iniciar-sesion' className='enlace'>
									Inicia sesión
								</Link>
							</p>
						) : (
							<p>
								Aún no tienes cuenta?{' '}
								<Link to='/crear-cuenta' className='enlace'>
									crea una gratis
								</Link>
							</p>
						)}
					</div>
					<div className='campo credenciales'>
						<p>Puedes usar las siguientes credenciales:</p>
						<p>email: invitado@correo.com</p>
						<p>password: invitado</p>
					</div>
				</form>
			</div>
		</div>
	);
};

Formulario.propTypes = {
	tipo: PropTypes.bool.isRequired,
};

export default Formulario;

import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {AuthContext} from '../../contexts/AuthContext';
import Alerta from './Alerta';

import '../css/extras.css';
import 'animate.css';

const Formulario = ({crearCuenta}) => {
	const {mensaje, setCredenciales} = useContext(AuthContext);

	const [error, setError] = useState(false);
	const [alerta, setAlerta] = useState({
		categoria: '',
		mensaje: '',
	});
	const [datos, setDatos] = useState({
		nombre: '',
		email: '',
		password: '',
	});

	const {nombre, email, password} = datos;

	const handleChange = (e) => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const validacion = Object.values(datos).every((dato) => dato.trim() !== '');

		if (crearCuenta) {
			if (!validacion) {
				setError(true);
				setAlerta({
					categoria: 'error',
					mensaje: 'Todos los campos son obligatorios!',
				});
				setTimeout(() => {
					setError(false);
				}, 3000);
				return;
			}
		}
		if (!crearCuenta) {
			if (email.trim() === '' || password.trim() === '') {
				setError(true);
				setAlerta({
					categoria: 'error',
					mensaje: 'Todos los campos son obligatorios!',
				});
				setTimeout(() => {
					setError(false);
				}, 3000);
				return;
			}
		}

		setCredenciales({
			nombre,
			email,
			password,
			crearCuenta,
		});

		setDatos({
			nombre: '',
			email: '',
			password: '',
		});
	};

	return (
		<div className='contenedor-form '>
			<div className='formulario-contenedor animate__animated animate__fadeIn'>
				<h2 className='titulo'>{crearCuenta ? 'CREAR CUENTA' : 'INICIAR SESIÓN'}</h2>
				{error ? <Alerta categoria={alerta.categoria} mensaje={alerta.mensaje} /> : null}
				{Object.keys(mensaje).length > 0 ? <Alerta categoria={mensaje.categoria} mensaje={mensaje.mensaje} /> : null}
				<form onSubmit={handleSubmit}>
					{crearCuenta && (
						<div className='campo'>
							<label htmlFor='nombre'>Nombre:</label>
							<input
								type='text'
								name='nombre'
								value={nombre}
								placeholder='Ingresa tu nombre'
								autoComplete='off'
								onChange={handleChange}
							/>
						</div>
					)}
					<div className='campo'>
						<label htmlFor='email'>Email:</label>
						<input
							type='email'
							name='email'
							value={email}
							placeholder='Ingresa tu email'
							autoComplete='off'
							onChange={handleChange}
						/>
					</div>
					<div className='campo'>
						<label htmlFor='password'>Password:</label>
						<input
							type='password'
							name='password'
							value={password}
							placeholder='Ingresa tu password'
							autoComplete='off'
							onChange={handleChange}
						/>
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
	crearCuenta: PropTypes.bool.isRequired,
};

export default Formulario;

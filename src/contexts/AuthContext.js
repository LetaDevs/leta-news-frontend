import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = (props) => {
	const initialToken = JSON.parse(localStorage.getItem('token')) || '';
	const [token, setToken] = useState(initialToken);
	const [autenticado, setAutenticado] = useState(true);
	const [mensaje, setMensaje] = useState({
		categoria: '',
		mensaje: '',
	});
	const [usuario, setUsuario] = useState({});
	const [credenciales, setCredenciales] = useState({
		nombre: '',
		email: '',
		password: '',
		crearCuenta: false,
	});

	let history = useHistory();

	useEffect(() => {
		if (credenciales.email === '') return;

		const iniciarSesion = async () => {
			const url = `${process.env.REACT_APP_BACKEND_URL}/usuarios/iniciar-sesion`;
			const consulta = await fetch(url, {
				method: 'POST',
				body: JSON.stringify({email: credenciales.email, password: credenciales.password}),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const datos = await consulta.json();
			console.log(datos);
			if (datos.code === 200) {
				localStorage.setItem('token', JSON.stringify(datos.token));
				setToken(datos.token);
				setAutenticado(true);
				history.push('/general');
			} else {
				setMensaje({
					categoria: 'error',
					mensaje: datos.msg,
				});
				setTimeout(() => {
					setMensaje({});
				}, 3000);
			}
		};

		const crearCuenta = async () => {
			const url = `${process.env.REACT_APP_BACKEND_URL}/usuarios/crear-cuenta`;
			const consulta = await fetch(url, {
				method: 'POST',
				body: JSON.stringify({nombre: credenciales.nombre, email: credenciales.email, password: credenciales.password}),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const datos = await consulta.json();

			if (datos.code === 200) {
				setMensaje({
					categoria: 'success',
					mensaje: 'Usuario creado correctamente',
				});
				setTimeout(() => {
					setMensaje({});
					history.push('/iniciar-sesion');
				}, 2000);
			} else {
				setMensaje({
					categoria: 'warning',
					mensaje: datos.msg,
				});
				setTimeout(() => {
					setMensaje({});
				}, 3000);
			}
		};

		if (!credenciales.crearCuenta) {
			iniciarSesion();
		} else {
			crearCuenta();
		}
	}, [credenciales]);

	useEffect(() => {
		if (token === '') return setAutenticado(false);

		const obtenerUsuario = async () => {
			const url = `${process.env.REACT_APP_BACKEND_URL}/usuarios/datos`;
			const consulta = await fetch(url, {
				headers: {'x-auth-token': token},
			});
			const datos = await consulta.json();
			if (datos.code === 200) {
				setUsuario(datos.usuario);
			}
		};
		obtenerUsuario();
	}, [token]);

	return (
		<AuthContext.Provider value={{usuario, mensaje, autenticado, setAutenticado, setUsuario, setCredenciales}}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

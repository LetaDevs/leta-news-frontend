import React, {useEffect, useState, useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import NoticiaUno from './noticias/NoticiaUno';

import 'animate.css';
import './css/contenido.css';

const Despues = () => {
	const {usuario} = useContext(AuthContext);

	const [noticias, setNoticias] = useState([]);
	const [buscando, setBuscando] = useState(true);

	useEffect(() => {
		const obtenerNoticias = async () => {
			const url = `${process.env.REACT_APP_BACKEND_URL}/noticias/obtener-despues/${usuario.id}`;
			const peticion = await fetch(url);
			const datos = await peticion.json();

			if (datos.code === 200) {
				const todas = datos.noticias.map((dato) => dato.noticia);
				const completas = todas.filter((noticia) => {
					if (Object.values(noticia).every((dato) => dato !== null)) {
						return noticia;
					}
				});

				setNoticias(completas);
				setBuscando(false);
			}
		};
		obtenerNoticias();
	}, []);

	return (
		<>
			{noticias.length > 0 ? (
				<div className='contenido'>
					<NoticiaUno noticia={noticias[0]} tipo='noticia-uno' />
					<NoticiaUno noticia={noticias[1]} tipo='noticia-tres' />
					<NoticiaUno noticia={noticias[2]} tipo='noticia-tres' />
					<div className='noticias-dos-contenedor'>
						<NoticiaUno noticia={noticias[3]} tipo='noticia-dos' />
						<NoticiaUno noticia={noticias[4]} tipo='noticia-dos' />
					</div>
					<div className='noticias-dos-contenedor'>
						<NoticiaUno noticia={noticias[5]} tipo='noticia-dos' />
						<NoticiaUno noticia={noticias[6]} tipo='noticia-dos' />
					</div>
					<NoticiaUno noticia={noticias[7]} tipo='noticia-tres' />
					<NoticiaUno noticia={noticias[8]} tipo='noticia-tres' />
					<NoticiaUno noticia={noticias[9]} tipo='noticia-tres' />
					<NoticiaUno noticia={noticias[10]} tipo='noticia-tres' />
				</div>
			) : (
				<h2>No tienes noticas para leer</h2>
			)}
		</>
	);
};

export default Despues;

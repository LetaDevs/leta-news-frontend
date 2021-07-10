import React, {createContext, useEffect, useState} from 'react';

export const NoticiasContext = createContext();

const NoticiasProvider = (props) => {
	const [noticias, setNoticias] = useState([]);
	const [pais, setPais] = useState('co');
	const [busqueda, setBusqueda] = useState('');
	const [categoria, setCategoria] = useState('technology');

	useEffect(() => {
		const obtenerNoticias = async () => {
			const url = `${process.env.REACT_APP_BACKEND_URL}/noticias?country=${pais}&category=${categoria}`;
			const peticion = await fetch(url);
			const datos = await peticion.json();
			if (datos.code === 200) {
				const completas = datos.noticias.filter((noticia) => {
					if (Object.values(noticia).every((dato) => dato !== null)) {
						return noticia;
					}
				});

				setNoticias(completas);
			}
		};
		obtenerNoticias();
	}, [pais, categoria]);

	useEffect(() => {
		if (busqueda.trim() !== '') {
			const obtenerNoticias = async () => {
				const url = `${process.env.REACT_APP_BACKEND_URL}/noticias?country=${pais}&q=${busqueda}`;
				const peticion = await fetch(url);
				const datos = await peticion.json();
				if (datos.code === 200) {
					const completas = datos.noticias.filter((noticia) => {
						if (Object.values(noticia).every((dato) => dato !== null)) {
							return noticia;
						}
					});

					setNoticias(completas);
				}
			};
			obtenerNoticias();
		}
	}, [busqueda]);

	return (
		<NoticiasContext.Provider value={{noticias, pais, setPais, setCategoria, setBusqueda}}>
			{props.children}
		</NoticiasContext.Provider>
	);
};

export default NoticiasProvider;

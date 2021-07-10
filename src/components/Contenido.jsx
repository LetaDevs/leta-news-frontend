import React, {useContext, useEffect} from 'react';
import 'animate.css';
import './css/contenido.css';

import {NoticiasContext} from '../contexts/NoticiasContext';
import NoticiaUno from './noticias/NoticiaUno';
import {Hidden} from '@material-ui/core';
import Buscador from './Buscador';

const Contenido = ({categoria}) => {
	const {noticias, setCategoria} = useContext(NoticiasContext);

	useEffect(() => {
		if (categoria === undefined) return;
		setCategoria(categoria);
	}, [categoria]);

	return (
		<div className='contenedor'>
			<Hidden mdUp>
				<div className='contenedor-buscador'>
					<Buscador />
				</div>
			</Hidden>
			<div className='contenido'>
				<NoticiaUno noticia={noticias[1]} tipo='noticia-uno' />
				<NoticiaUno noticia={noticias[2]} tipo='noticia-tres' />
				<NoticiaUno noticia={noticias[3]} tipo='noticia-tres' />
				<div className='noticias-dos-contenedor'>
					<NoticiaUno noticia={noticias[4]} tipo='noticia-dos' />
					<NoticiaUno noticia={noticias[5]} tipo='noticia-dos' />
				</div>
				<div className='noticias-dos-contenedor'>
					<NoticiaUno noticia={noticias[6]} tipo='noticia-dos' />
					<NoticiaUno noticia={noticias[7]} tipo='noticia-dos' />
				</div>
				<NoticiaUno noticia={noticias[8]} tipo='noticia-tres' />
				<NoticiaUno noticia={noticias[9]} tipo='noticia-tres' />
				<NoticiaUno noticia={noticias[10]} tipo='noticia-tres' />
				<NoticiaUno noticia={noticias[11]} tipo='noticia-tres' />
			</div>
		</div>
	);
};

export default Contenido;

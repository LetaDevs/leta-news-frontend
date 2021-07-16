import React, {useContext} from 'react';
import '../css/contenido.css';
import 'animate.css';

import {AuthContext} from '../../contexts/AuthContext';

const NoticiaUno = ({noticia, tipo}) => {
	const {usuario} = useContext(AuthContext);
	if (!noticia) return null;

	const guardarNoticia = () => {
		const url = `${process.env.REACT_APP_BACKEND_URL}/noticias/leer-despues`;
		fetch(url, {
			method: 'POST',
			body: JSON.stringify({usuarioId: usuario.id, noticiaId: noticia.id}),
			headers: {
				'Content-Type': 'application/json',
			},
		}).catch((error) => console.log(error));
	};

	return (
		<>
			<div className={`noticia-contenedor animate__animated animate__pulse ${tipo}`}>
				<img src={noticia.urlToImage} alt='imagen noticia' />
				<div className='noticia-contenido'>
					<div className='noticia-datos'>
						<p className='noticia-autor'>{noticia.author.substr(0, 26)}</p>
						<p className='noticia-fecha'>{noticia.publishedAt.substr(0, 10)}</p>
					</div>
					<h2 className='noticia-titulo'>{noticia.title}</h2>
					<p className='noticia-descripcion'>{noticia.description}</p>
					<div className='noticia-botones'>
						<a href={noticia.url} className='noticia-leer' target='_blank'>
							Leer artículo <i className='icono'></i>
						</a>
						<button className='noticia-mas-tarde' onClick={guardarNoticia}>
							<span>Leer despues</span>
							<i className='icono'></i>
						</button>
					</div>
				</div>
				<div className='noticia-barra'></div>
			</div>
		</>
	);
};

export default NoticiaUno;

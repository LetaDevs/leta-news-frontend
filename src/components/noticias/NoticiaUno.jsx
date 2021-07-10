import React from 'react';
import '../css/contenido.css';
import 'animate.css';

const NoticiaUno = ({noticia, tipo}) => {
	if (!noticia) return null;

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
							Leer artículo
						</a>
						<button className='noticia-mas-tarde'>Leer más tarde</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default NoticiaUno;

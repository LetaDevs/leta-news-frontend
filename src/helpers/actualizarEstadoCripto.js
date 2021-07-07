export const actualizarEstadoCripto = (nuevo, anterior) => {
	if (nuevo > anterior) return 'subio';
	if (nuevo < anterior) return 'bajo';
	if (nuevo === anterior) return 'igual';
};

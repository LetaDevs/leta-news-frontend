import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext';

const HomeRoute = ({component: Componente, ...props}) => {
	const {autenticado} = useContext(AuthContext);

	return (
		<Route
			{...props}
			render={(props) => (!autenticado ? <Redirect to='/iniciar-sesion' /> : <Componente {...props} />)}
		/>
	);
};

export default HomeRoute;

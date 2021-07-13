import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import CrearCuenta from './components/extras/CrearCuenta';
import IniciarSesion from './components/extras/IniciarSesion';
import Main from './components/Main';
import NoticiasProvider from './contexts/NoticiasContext';
import AuthProvider from './contexts/AuthContext';

import HomeRoute from './rutasPrivadas/HomeRoute';

function App() {
	return (
		<div className='App'>
			<NoticiasProvider>
				<Router>
					<AuthProvider>
						<div>
							<Switch>
								<HomeRoute exact path='/' component={Main} />
								<Route path='/crear-cuenta' component={CrearCuenta} />
								<Route path='/iniciar-sesion' component={IniciarSesion} />
								<HomeRoute path='/:categoria' component={Main} />
							</Switch>
						</div>
					</AuthProvider>
				</Router>
			</NoticiasProvider>
		</div>
	);
}

export default App;

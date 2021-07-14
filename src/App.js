import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import CrearCuenta from './components/extras/CrearCuenta';
import IniciarSesion from './components/extras/IniciarSesion';
import Main from './components/Main';
import Despues from './components/Despues';
import NoticiasProvider from './contexts/NoticiasContext';
import AuthProvider from './contexts/AuthContext';

import HomeRoute from './rutasPrivadas/HomeRoute';

function App() {
	return (
		<div className='App'>
			<Router>
				<AuthProvider>
					<NoticiasProvider>
						<div>
							<Switch>
								<Route exact path='/' render={() => <Redirect to='/general' />} />
								<HomeRoute exact path='/' component={Main} />
								<Route path='/crear-cuenta' component={CrearCuenta} />
								<Route path='/iniciar-sesion' component={IniciarSesion} />
								<HomeRoute path='/:categoria' component={Main} />
								<HomeRoute path='/noticias/despues' component={Main} />
							</Switch>
						</div>
					</NoticiasProvider>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CrearCuenta from './components/extras/CrearCuenta';
import IniciarSesion from './components/extras/IniciarSesion';
import Main from './components/Main';
import NoticiasProvider from './contexts/NoticiasContext';

function App() {
	return (
		<div className='App'>
			<NoticiasProvider>
				<Router>
					<div>
						<Switch>
							<Route path='/crear-cuenta' component={CrearCuenta} />
							<Route path='/iniciar-sesion' component={IniciarSesion} />
							<Route exact path='/' component={Main} />
							<Route path='/:categoria' component={Main} />
						</Switch>
					</div>
				</Router>
			</NoticiasProvider>
		</div>
	);
}

export default App;

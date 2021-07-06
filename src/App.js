import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CrearCuenta from './components/extras/CrearCuenta';
import IniciarSesion from './components/extras/IniciarSesion';
import Main from './components/Main';

function App() {
	return (
		<div className='App'>
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
		</div>
	);
}

export default App;

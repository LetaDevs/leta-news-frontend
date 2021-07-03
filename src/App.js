import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './components/Main';

function App() {
	return (
		<div className='App'>
			<Router>
				<div>
					<Switch>
						<Route path='/' component={Main} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;

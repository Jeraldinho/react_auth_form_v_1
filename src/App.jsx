import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
	console.log('render');
	
	return (
		<div className="App">
			<Header />
			<Router>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/profile" component={Profile} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

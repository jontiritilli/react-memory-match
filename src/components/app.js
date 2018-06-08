import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import PlayPage from './playPage';
import '../assets/css/app.css';

class App extends Component {
	render() {
		return (
			<Route
				render={({ location }) => {
					return (
						<TransitionGroup>
							<CSSTransition key={location.key} classNames="fade" timeout={750}>
								<Switch location={location}>
									<Route exact path="/" component={PlayPage} />
									<Redirect to="/" />
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					);
				}}
			/>
		);
	}
}

export default App;
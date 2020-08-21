import React from 'react';
import Header from './Components/header/Header';
import Main from './Components/main/Main';
import Menu from './Components/menu/Menu';
import About from './Components/about/About';
import Reviews from './Components/reviews/Reviews';
import Contact from './Components/contact/Contact';

import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<React.Fragment>
			<Router>
				<Header />
				<Route exact path="/menu" component={Menu} />
				<Route exact path="/reviews" component={Reviews} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/about" component={About} />
				<Route exact path="/" component={Main} />
			</Router>
		</React.Fragment>
	);
}

export default App;

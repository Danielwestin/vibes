import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const links = [
	{ title: 'About', path: '/about' },
	{ title: 'Contact', path: '/contact' },
	{ title: 'Menu', path: '/menu' },
	{ title: 'Reviews', path: '/reviews' },
	{ title: 'Home', path: '/' }
];

export default function header() {
	axios.get('/helo').then((response) => {
		console.log(response);
	});
	return (
		<header>
			<nav>
				{links.map((link) => (
					<NavLink key={link.path + link.title} to={link.path}>
						{link.title}
					</NavLink>
				))}
			</nav>
		</header>
	);
}

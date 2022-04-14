import React, { useEffect } from 'react';
import { JokeTellerCard } from './JokeTellerCard';

import './css/Normalize.css';
import './css/App.css';

export const App = () => {
	const [joke, setJoke] = React.useState('');

	const API_URL =
		'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

	React.useEffect(() => {
		const getJoke = async () => {
			const response = await fetch(API_URL);
			const data = await response.json();
			//setJoke(data.joke)

			if (data) {
				if (data.setup) {
					setJoke(`${data.setup}...${data.deliver}`);
				} else {
					setJoke(data.joke);
				}
				console.log(joke);
			}
		};
		getJoke();
	}, [joke]);

	return <JokeTellerCard />;
};

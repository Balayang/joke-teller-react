import React from 'react';
import { JokeTellerCard } from './JokeTellerCard';

import './css/Normalize.css';
import './css/App.css';

// todle nepotrebujes mit uvnitr komponenty, protoze to je konstanta, kterou nepotrebujes tvorit
// pri kazdem renderu
const API_URL =
	'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

export const App = () => {
	// nastavovat state jako prazdny string je celkem zapeklite, protoze prazdny string se tvari jako falsy hodnota
	const [joke, setJoke] = React.useState('');

	// todle je funkce pro nacitani jednoho joke z jejich api
	const getJoke = async () => {
		const response = await fetch(API_URL);
		const data = await response.json();

		if (data) {
			if (data.setup) {
				// davat pozor na spelling :) v api dokumentaci je delivery, ne deliver
				setJoke(`${data.setup}...${data.delivery}`);
			} else {
				setJoke(data.joke);
			}
			console.log(joke);
		}
	};

	// tady ten lifecycle se provede pouze pri prvnim nacteni stranky
	// protoze jsi do dependencies uvedla prazdne pole
	// a ty chces aby se pri nacteni stranky nacetl jenom jeden joke
	// (pokud bys do deps ovsem uvedla promennou joke, bude se to provadet pri kazde zmene te promenne,
	// coz v tvem pripade vytvori nekonecnou smycku a bud overloadnes api nebo zaseknes stranku)
	React.useEffect(() => {
		getJoke();
	}, []);

	// do JokeTellerCard komponenty posilame joke i funkci pro nacteni joku jako props
	return <JokeTellerCard joke={joke} getJoke={getJoke} />;
};

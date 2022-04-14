import React from 'react';

export const JokeTellerCard = (joke) => (

	<div className="container">
		<button
//			onClick={getJoke()}
			className="button"
			id="button"
			value={joke}
		>
			Tell Me A Joke
		</button>
		<audio
			//onended="toggleButton()"
			id="audio"
			className="audio"
			hidden
			controls
		></audio>
	</div>
);

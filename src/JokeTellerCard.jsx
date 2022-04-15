import React from 'react';

// props jsou vzdycky objekt, takze (joke, getJoke) nikdy nebude fungovat
// kdezto destructuring z props objektu uz ano (proto ty slozene zavorky)
export const JokeTellerCard = ({ joke, speak }) => (
	<div className="container">
		{/* v onClick chces zavolat danou funkci, ne vratit jeji vysledek, proto tento zapis */}
		<button onClick={() => speak({ text: joke })} className="button" id="button" value={joke}>
			Tell Me A Joke
		</button>
		<audio id="audio" className="audio" hidden controls></audio>
	</div>
);

const Pet = ({ name, animal, breed }) => {
	return React.createElement('div', {}, [
		React.createElement('h1', {}, name),
		React.createElement('h2', {}, animal),
		React.createElement('h2', {}, breed)
	]);
};

const App = () => {
	return React.createElement('div', {}, [
		React.createElement('h1', {}, 'Adopt Me!!'),
		React.createElement(Pet, { name: 'Remmy Williams', animal: 'Cat', breed: '....hmmm' }),
		React.createElement(Pet, { name: 'Tyronne', animal: 'Parrot', breed: 'IDK' }),
		React.createElement(Pet, { name: 'Ginger', animal: 'Dog', breed: 'German Shephard' })
	]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));

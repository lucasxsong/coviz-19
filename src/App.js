import React, { Component } from 'react';
import './App.css';
import Tile from './tile.js';
import Particles from 'react-particles-js';

class App extends Component {
	render() {
		return (
			<>
				<Tile />
                <Particles/>
			</>
		);
	}
}

export default App;

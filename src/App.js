import React, { Component } from 'react';
import './App.css';
import Tile from './tile.js';
import styled from 'styled-components'

class App extends Component {
	render() {
		return (
			<>
                <BackgroundWrapper>
				<Tile />
                </BackgroundWrapper>
			</>
		);
	}
}

export default App;


const BackgroundWrapper = styled.div`
position: absolute;
top: 0;
left: 0;
min-height: 100vh;
min-width: 100vw;
background-color: #282a36;
`
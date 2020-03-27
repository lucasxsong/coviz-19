import React, { Component } from 'react';
import styled from 'styled-components';
import Controls from './controls.js';
import Particles from 'react-particles-js';

class Tile extends Component {
	constructor(props) {
		super(props);
		this.state = { density: 0, movement: 0 };
		this.movementHandler = this.movementHandler.bind(this);
	}

	movementHandler = arg => {
		this.setState({ movement: arg });
	};

	densityHandler = arg => {
		this.setState({ density: arg });
	};

	render() {
		return (
			<AppWrapper>
				<Controls
					movement={this.movementHandler}
					density={this.densityHandler}
				/>

				<TileWrapper>
					<Particles
						params={{
							particles: {
								number: {
									value: 60,
									density: {
										enable: true,
										value_area: 1500
									}
								},
								line_linked: {
									enable: true,
									opacity: 0.02
								},
								move: {
									direction: 'right',
									speed: 0.05
								},
								size: {
									value: 1
								},
								opacity: {
									anim: {
										enable: true,
										speed: 1,
										opacity_min: 0.05
									}
								}
							},
							interactivity: {
								events: {
									onclick: {
										enable: true,
										mode: 'push'
									}
								},
								modes: {
									push: {
										particles_nb: 1
									}
								}
							},
							retina_detect: true
						}}
					/>
				</TileWrapper>
			</AppWrapper>
		);
	}
}

export default Tile;

const TileWrapper = styled.div`
	box-shadow: 5px 0px 40px black;
	border-radius: 15px;
`;

const AppWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin-top: 10vw;
	width: 70vw;
	height: 600px;
	margin-left: auto;
	margin-right: auto;
`;

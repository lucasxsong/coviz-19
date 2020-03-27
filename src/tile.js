import React, { Component } from 'react';
import styled from 'styled-components';
import Controls from './controls.js';
import Particles from 'react-particles-js';

class Tile extends Component {
	constructor(props) {
		super(props);
		this.state = { density: 10, movement: 1 };
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
                <TitleWrapper>
                    coviz-19
                </TitleWrapper>

				<Particles
					height={600}
					width={800}
					style={{ backgroundColor: '#44475a', borderRadius: '15px' }}
					params={{
						particles: {
							number: {
								value: this.state.density,
								density: {
									enable: true,
									value_area: 1500
								}
							},
							line_linked: {
								enable: true,
								opacity: 0.5,
								distance: 60
							},
							move: {
								direction: 'right',
								speed: this.state.movement
							},
							size: {
								value: 3
							},
							opacity: {
								anim: {
									enable: false,
									speed: 1,
									opacity_min: 0.05
								}
							}
						},
						interactivity: {
							events: {
								onclick: {
									enable: false,
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
                <ControlWrapper>
					<Controls
						movement={this.movementHandler}
						density={this.densityHandler}
					/>
				</ControlWrapper>
			</AppWrapper>
		);
	}
}

export default Tile;

const TitleWrapper = styled.h1`
`;

const AppWrapper = styled.div`
	display: grid;
	grid-template-columns: .7fr 1fr;
	width: 70vw;
	height: 600px;
	margin-top: 50px;
	margin-left: auto;
	margin-right: auto;
	background-color: #f8f8f2;
	padding: 100px;
	border-radius: 15px;
`;

const ControlWrapper = styled.div`
    max-width: 300px;
    margin-top: -150px;
    margin-right: -150px;
    height: min-content;
    text-align: right;
    padding: 15px;
    background-color: #bcbcbc;
    opacity: .7;
    border-radius: 15px;
`;

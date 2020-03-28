import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
	root: {
		width: 400
	}
});
export default function DiscreteSlider(props) {
	const classes = useStyles();

	const handleMovement = (event, newVal) => {
		props.movement(newVal);
	};
	const handleDensity = (event, newVal) => {
		props.density(newVal);
	};

	const pmarks = [
        { value: 21, label: 'Riverside' },
		{ value: 40, label: 'Portland' },
		{ value: 66, label: 'San Francisco' },
		{ value: 100, label: 'New York City' }
	];

	const mmarks = [
		{ value: 1, label: 'Full Lockdown' },
		{ value: 5, label: 'Essential Travel' },
		{ value: 8, label: 'No Lockdown' }
	];

	return (
		<div className={classes.root}>
			<Typography class="label" id="discrete-slider" gutterBottom>
				Population Density
			</Typography>
			<Slider
				defaultValue={30}
				onChange={handleDensity}
				aria-labelledby="discrete-slider"
				step={10}
				min={0}
				max={100}
				marks={pmarks}
			/>
			<Typography class="label" id="discrete-slider" gutterBottom>
				Movement
			</Typography>
			<Slider
				defaultValue={3}
				onChange={handleMovement}
				aria-labelledby="discrete-slider"
				step={1}
				marks={mmarks}
				min={0}
				max={10}
			/>
		</div>
	);
}

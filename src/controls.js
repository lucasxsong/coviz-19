import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider(props) {
  const classes = useStyles();

  const handleMovement = (event, newVal) => {
      props.movement(newVal);
  }
  const handleDensity = (event, newVal) => {
    props.density(newVal);
}

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Population Density
      </Typography>
      <Slider
        defaultValue={30}
        onChange={handleDensity}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
      <Typography id="discrete-slider" gutterBottom>
        Movement
      </Typography>
      <Slider
        defaultValue={30}
        onChange={handleMovement}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
    </div>
  );
}
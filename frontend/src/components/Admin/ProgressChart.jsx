// import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';


const ProgressChart = ({ value }) => {
    return (
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textColor: 'Vibrant-Purple',
          pathColor: 'Vibrant-Purple',
          trailColor: 'lightgray',
        })}
      />
    );
  };
  
  ProgressChart.propTypes = {
    value: PropTypes.number.isRequired,
  };
  
  export default ProgressChart;
  

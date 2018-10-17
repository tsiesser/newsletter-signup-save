import React from 'react';
import PropTypes from 'prop-types';

import classes from './ErrorMessage.module.scss';

const errorMessage = (props) => {
  let errorClass = classes.ErrorMessage;
  if (props.arrow) {
    if (props.arrow.toUpperCase() === 'UP') {
      errorClass = classes.ErrorMessageUp;
    } else if (props.arrow.toUpperCase() === 'DOWN') {
      errorClass = classes.ErrorMessageDown;
    }
  }

  return (
    <div className={errorClass}>{props.text}</div>
  );
};

errorMessage.propTypes = {
  text: PropTypes.string.isRequired,
  arrow: PropTypes.oneOf(['UP', 'DOWN', 'up', 'down'])
};

export default errorMessage;
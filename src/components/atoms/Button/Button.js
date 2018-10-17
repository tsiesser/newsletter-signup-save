import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.scss';

const button = (props) => {
  return (
    <button className={classes.Button}
            onClick={props.click}>{props.text}</button>
  );
};

button.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
};

export default button;
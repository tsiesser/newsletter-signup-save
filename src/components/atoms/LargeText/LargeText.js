import React from 'react';
import PropTypes from 'prop-types';

import classes from './LargeText.module.scss';

const largeText = (props) => {
  return (
    <div className={classes.LargeText}>{props.text}</div>
  );
};

largeText.propTypes = {
  text: PropTypes.string.isRequired
};

export default largeText;
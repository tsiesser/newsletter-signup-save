import React from 'react';
import PropTypes from 'prop-types';

import classes from './LargeTitle.module.scss';

const largeTitle = (props) => {
  return (
    <div className={classes.LargeTitle}>{props.text}</div>
  );
};

largeTitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default largeTitle;
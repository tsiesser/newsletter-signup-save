import React from 'react';
import PropTypes from 'prop-types';

import classes from './Title.module.scss';

const title = (props) => {
  return (
    <div className={classes.Title}>{props.text}</div>
  );
};

title.propTypes = {
  text: PropTypes.string.isRequired
};

export default title;
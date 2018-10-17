import React from 'react';
import PropTypes from 'prop-types';

import classes from './Header.module.scss';

const header = (props) => {
  return (
    <div className={classes.Header}>{props.text}</div>
  );
};

header.propTypes = {
  text: PropTypes.string.isRequired
};

export default header;
import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.module.scss';

const input = (props) => {
  const keyDownHandler = (event) => {
    if (event.keyCode === 13) {
      props.enter();
    }
  };

  return (
    <input className={classes.Input}
           type={props.type}
           autoFocus={props.autoFocus}
           placeholder={props.placeholder}
           value={props.value}
           onChange={(event) => props.change(event.target.value)}
           onKeyDown={keyDownHandler}/>
  );
};

input.propTypes = {
  type: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  change: PropTypes.func.isRequired
};

export default input;
import React from 'react';

import classes from './Breakpoints.module.scss';

const breakpoints = (props) => {
  return (
    <div className={classes.Breakpoints}>
      <div/>
      {props.children}
    </div>
  );
};

export default breakpoints;
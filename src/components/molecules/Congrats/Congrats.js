import React from 'react';

import classes from './Congrats.module.scss';
import {SignupText} from '../../organisms/Signup/SignupText';
import LargeTitle from '../../atoms/LargeTitle/LargeTitle';
import LargeText from '../../atoms/LargeText/LargeText';

const congrats = () => {
  return (
    <div className={classes.Congrats}>
      <LargeTitle text={SignupText.CONGRATS_TITLE}/>
      <LargeText text={SignupText.CONGRATS_TEXT}/>
    </div>
  );
};

export default congrats;